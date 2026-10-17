---
layout: post
title: "AI tools and customer data in Alberta: what PIPA means for a small business"
date: 2026-10-17 12:04:00
description: A plain-language look at how Alberta's Personal Information Protection Act applies when you put customer details into AI tools and automations, with a short checklist.
tags: small-business automation alberta privacy
categories: local
---

Most AI tools and automation apps are run by companies outside Canada. The moment you paste a customer's name, phone number or job details into one, that information has left your hands. If your business is in Alberta, the *Personal Information Protection Act* (PIPA) has something to say about that.

This isn't a reason to avoid AI. It's a reason to set things up properly, which is easier than it sounds.

**This is general information, not legal advice.** If you handle sensitive information (health, finances, children, legal matters), talk to a lawyer or the Office of the Information and Privacy Commissioner of Alberta before you automate anything.

## What PIPA covers

PIPA applies to private-sector organizations in Alberta, including small businesses, and to the personal information they collect about customers and employees. In plain terms, it expects you to:

- collect only the personal information you reasonably need, and for reasons a customer would expect,
- protect it with reasonable security,
- keep it only as long as you need it, then destroy it or make it anonymous,
- let people see what you hold about them if they ask,
- report a privacy breach to the Commissioner when it poses a real risk of significant harm to someone.

None of that is new because of AI. What AI changes is how easily information gets copied into new places.

## The part that catches people out: service providers outside Canada

If you use a service provider outside Canada to collect, use or store personal information, the Alberta government's guidance says your written policies need to include which country that happens in and what the provider is allowed to do with the information. You also need to tell customers how they can see those policies and who at your business can answer their questions about it.

Most AI chat tools, automation platforms (Zapier, Make and others) and many booking and CRM apps run on servers in the United States or elsewhere. So if customer details flow through them, that rule likely applies to you. You can read the government's summary on [alberta.ca](https://www.alberta.ca/organization-responsibilities-for-protecting-personal-information) and the Act itself on [open.alberta.ca](https://open.alberta.ca/publications/p06p5). Laws get updated, so check the current version.

## A practical checklist for using AI with customer data

1. **Make a list of your tools.** Write down every app that touches customer information: email, booking, invoicing, CRM, AI chat tools, automation platforms. Note where each one stores data, which is usually on its privacy or security page.
2. **Send less.** Most automations don't need everything. An AI that sorts inquiries needs the message, not the customer's address and date of birth. Strip out what isn't needed before it goes to an AI model.
3. **Check what the AI provider does with your data.** Business and API plans from the major AI companies usually don't train on your data by default, but free consumer plans may. Read the data-use settings and pick the option that keeps your data out of training.
4. **Update your privacy policy.** Add a short section listing the outside-Canada service providers you use, the countries involved and why. Name the person customers can contact with questions.
5. **Tell customers.** A line on your website forms and booking pages is usually enough: what you collect, why, and a link to your privacy policy.
6. **Turn on two-factor login** for every tool on your list. Most breaches at small businesses start with a stolen password.
7. **Set a clean-up rule.** Decide how long you keep inquiry and customer records in each tool and delete old ones on a schedule. Many tools can do this automatically.
8. **Know what you'd do in a breach.** If a laptop is stolen or an account is taken over, you need to work out whether there's a real risk of significant harm. If there is, you report it to the Commissioner. The [OIPC website](https://oipc.ab.ca/) has guidance on how.

## What this looks like in a real automation

Take the missed-call setup from [my earlier post]({% post_url 2026-10-17-missed-calls-calgary-service-business %}). A privacy-minded version would:

- send only the caller's message text to the AI model, not their full contact history,
- use an AI plan that doesn't train on your data,
- keep the conversation log in one place you control, with a clean-up rule,
- be listed in your privacy policy, with the country it runs in.

That's a few extra minutes of setup. It's also the difference between "we use AI" being something you're comfortable saying to customers and something you'd rather they didn't ask about.

## A privacy-policy paragraph you can adapt

Here's a starting point for the outside-Canada part of your privacy policy. Replace the parts in square brackets, delete any tools you don't use, and have it checked if your situation is unusual.

> **Service providers outside Canada**
>
> We use a small number of service providers to run our business, and some of them store or process personal information outside Canada. These are:
>
> - [Tool name], used for [booking appointments / sending email / sorting inquiries], which stores information in [country].
> - [Tool name], used for [purpose], which stores information in [country].
>
> These providers may only use your information for the purposes listed above, and information stored outside Canada may be accessible to authorities in those countries under their laws. If you have questions about how we use service providers outside Canada, or want a copy of our policies, contact [name or job title] at [email or phone].

Keep the list current. When you add or drop a tool, update this paragraph the same day.


## Want a second pair of eyes?

When I build automations for clients, this list is part of the job: what data flows where, what can be left out, and what needs a line in the privacy policy. If you already use AI tools and want to check your setup, or you're planning something new, [book a free 20-minute discovery call](/services/).
