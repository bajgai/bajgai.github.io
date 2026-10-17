// Contact and newsletter forms (_includes/contact_form.html, _includes/newsletter.html).
// A form whose action is a mailto: link opens an email instead of posting, so the
// forms work before the Formspree and Buttondown values are set in _config.yml.
(function () {
  if (window.leadFormsLoaded) return;
  window.leadFormsLoaded = true;

  var thanksUrl = "/thanks/";

  function setStatus(form, text, isError) {
    var status = form.querySelector(".lead-form-status");
    if (!status) return;
    status.textContent = text;
    status.hidden = false;
    status.classList.toggle("lead-form-status-error", !!isError);
  }

  function fieldLines(form) {
    var lines = [];
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.type === "hidden" || el.type === "submit" || el.name === "_gotcha") return;
      var label = form.querySelector('label[for="' + el.id + '"]');
      var name = label ? label.childNodes[0].textContent.trim() : el.name;
      lines.push(name + ": " + el.value.trim());
    });
    return lines;
  }

  function openEmail(form) {
    var action = form.getAttribute("action");
    var match = /[?&]subject=([^&]*)/.exec(action);
    var subject = match ? decodeURIComponent(match[1]) : "Message from bajgai.ca";
    var body = fieldLines(form).join("\n\n");
    window.location.href = "mailto:" + form.dataset.mailto +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    setStatus(form, "Your email app should open with the message filled in. Press send there and I will reply within one business day.");
  }

  function postForm(form, button) {
    button.disabled = true;
    setStatus(form, "Sending…");
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (!response.ok) throw new Error("HTTP " + response.status);
        window.location.href = thanksUrl + "?form=" + form.dataset.leadForm;
      })
      .catch(function () {
        button.disabled = false;
        setStatus(form, "Sorry, that did not send. Please email " + form.dataset.mailto + " instead.", true);
      });
  }

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form.dataset || !form.dataset.leadForm) return;

    var trap = form.querySelector('[name="_gotcha"]');
    if (trap && trap.value) {
      event.preventDefault();
      return;
    }

    var action = form.getAttribute("action") || "";
    if (action.indexOf("mailto:") === 0) {
      event.preventDefault();
      openEmail(form);
    } else if (form.dataset.leadForm === "contact") {
      event.preventDefault();
      postForm(form, form.querySelector('[type="submit"]'));
    }
    // A configured newsletter form posts normally; Buttondown shows its own
    // confirmation page, or redirects to /thanks/ if set in its settings.
  });
})();
