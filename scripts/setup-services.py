#!/usr/bin/env python3
"""Create the paid-service links and wire the sign-up forms into the site.

Reads keys from environment variables only, so nothing secret ever lands in
the repo. Each part runs only when its variable is set; run it again at any
time and it reuses what it already made instead of creating duplicates.

  STRIPE_SECRET_KEY    sk_live_... or sk_test_...  -> 3 Stripe Payment Links
  CALCOM_LINK          optional, e.g. https://cal.com/niranjan/discovery
                       (discovery button; strategy payments redirect here)
  FORMSPREE_ENDPOINT   https://formspree.io/f/xxxxxxx  -> contact form
  BUTTONDOWN_API_KEY   Buttondown API key  -> newsletter username

Usage:
  STRIPE_SECRET_KEY=sk_live_... python3 scripts/setup-services.py
  python3 scripts/setup-services.py --dry-run   # show what would change

Writes the results into services/index.html (window.SERVICE_LINKS) and
_config.yml (lead_capture). Commit and push those two files afterwards.
Standard library only.
"""

import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERVICES_HTML = os.path.join(ROOT, "services", "index.html")
CONFIG_YML = os.path.join(ROOT, "_config.yml")
THANKS = "https://bajgai.ca/thanks/"

# key in SERVICE_LINKS -> what to sell. Amounts are in cents, CAD.
SERVICES = [
    {"key": "strategy", "name": "Strategy session",
     "description": "60-minute AI automation strategy session with a written plan within 2 business days. Fee credited toward a build ordered within 30 days.",
     "amount": 14900, "recurring": False},
    {"key": "build", "name": "Automation build deposit",
     "description": "Deposit that reserves your automation build start date. The balance is due on delivery.",
     "amount": 60000, "recurring": False},
    {"key": "care", "name": "Care plan",
     "description": "Monitoring, fixes and up to 5 hours of improvements to your automations each month. Cancel any month.",
     "amount": 45000, "recurring": True},
]

DRY_RUN = "--dry-run" in sys.argv


def http(method, url, headers=None, data=None):
    body = None
    if data is not None:
        body = urllib.parse.urlencode(data).encode()
    req = urllib.request.Request(url, data=body, method=method, headers=headers or {})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode() or "{}")
    except urllib.error.HTTPError as err:
        detail = err.read().decode(errors="replace")
        sys.exit(f"{method} {url} failed with {err.code}: {detail}")


# --------------------------------------------------------------------------
# Stripe
# --------------------------------------------------------------------------

def stripe(method, path, key, data=None):
    return http(method, "https://api.stripe.com/v1/" + path,
                {"Authorization": "Bearer " + key}, data)


def stripe_all(path, key):
    items, params = [], {"limit": 100}
    while True:
        sep = "&" if "?" in path else "?"
        page = stripe("GET", path + sep + urllib.parse.urlencode(params), key)
        items += page.get("data", [])
        if not page.get("has_more"):
            return items
        params["starting_after"] = items[-1]["id"]


def setup_stripe(key, calcom):
    mode = "TEST" if key.startswith(("sk_test_", "rk_test_")) else "LIVE"
    print(f"Stripe ({mode} mode)")
    products = {p.get("metadata", {}).get("bajgai_service"): p
                for p in stripe_all("products?active=true", key)}
    links = {l.get("metadata", {}).get("bajgai_service"): l
             for l in stripe_all("payment_links?active=true", key)}
    out = {}
    for svc in SERVICES:
        k = svc["key"]
        redirect = (calcom or THANKS + "?paid=strategy") if k == "strategy" \
            else f"{THANKS}?paid={k}"
        if k in links:
            out[k] = links[k]["url"]
            print(f"  {svc['name']}: reusing {out[k]}")
            continue
        if DRY_RUN:
            print(f"  {svc['name']}: would create CA${svc['amount'] / 100:.0f}"
                  f"{' per month' if svc['recurring'] else ''}, redirect {redirect}")
            continue
        product = products.get(k)
        if product is None:
            data = {
                "name": svc["name"],
                "description": svc["description"],
                "metadata[bajgai_service]": k,
                "default_price_data[currency]": "cad",
                "default_price_data[unit_amount]": svc["amount"],
            }
            if svc["recurring"]:
                data["default_price_data[recurring][interval]"] = "month"
            product = stripe("POST", "products", key, data)
        link = stripe("POST", "payment_links", key, {
            "line_items[0][price]": product["default_price"],
            "line_items[0][quantity]": 1,
            "metadata[bajgai_service]": k,
            "after_completion[type]": "redirect",
            "after_completion[redirect][url]": redirect,
            "billing_address_collection": "required",
            "phone_number_collection[enabled]": "true",
            "allow_promotion_codes": "true",
        })
        out[k] = link["url"]
        print(f"  {svc['name']}: created {out[k]}")
    return out


# --------------------------------------------------------------------------
# Buttondown and Formspree
# --------------------------------------------------------------------------

def buttondown_username(key):
    res = http("GET", "https://api.buttondown.com/v1/newsletters",
               {"Authorization": "Token " + key})
    results = res.get("results", [])
    if not results:
        sys.exit("Buttondown key works but the account has no newsletter yet.")
    name = results[0]["username"]
    print(f"Buttondown newsletter: {name}")
    return name


def check_formspree(endpoint):
    if not re.fullmatch(r"https://formspree\.io/f/[A-Za-z0-9]+", endpoint):
        sys.exit("FORMSPREE_ENDPOINT should look like https://formspree.io/f/abcdwxyz")
    print(f"Formspree endpoint: {endpoint}")
    return endpoint


# --------------------------------------------------------------------------
# Writing the values into the site
# --------------------------------------------------------------------------

def replace_in(path, pattern, value, label):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    new, n = re.subn(pattern, lambda m: m.group(1) + value + m.group(2), text, count=1)
    if n != 1:
        sys.exit(f"Could not find {label} in {os.path.relpath(path, ROOT)}")
    if new == text:
        return
    print(f"  {os.path.relpath(path, ROOT)}: {label} = {value}")
    if not DRY_RUN:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new)


def set_service_link(key, url):
    replace_in(SERVICES_HTML, r'(\n\s*' + key + r':\s*")[^"]*(")', url, key)


def set_config(key, value):
    replace_in(CONFIG_YML, r'(\n\s*' + key + r':\s*")[^"]*(")', value, key)


def main():
    env = os.environ.get
    stripe_key = (env("STRIPE_SECRET_KEY") or "").strip()
    calcom = (env("CALCOM_LINK") or "").strip()
    formspree = (env("FORMSPREE_ENDPOINT") or "").strip()
    buttondown = (env("BUTTONDOWN_API_KEY") or "").strip()
    if not any([stripe_key, calcom, formspree, buttondown]):
        sys.exit(__doc__)

    updates = []
    if calcom:
        updates.append(lambda: set_service_link("discovery", calcom))
    if stripe_key:
        for k, url in setup_stripe(stripe_key, calcom).items():
            updates.append(lambda k=k, url=url: set_service_link(k, url))
    if formspree:
        value = check_formspree(formspree)
        updates.append(lambda: set_config("contact_form_endpoint", value))
    if buttondown:
        name = buttondown_username(buttondown)
        updates.append(lambda: set_config("newsletter_username", name))

    print("Site files" + (" (dry run, nothing written)" if DRY_RUN else ""))
    for update in updates:
        update()
    print("Done. Commit services/index.html and _config.yml, then push.")


if __name__ == "__main__":
    main()
