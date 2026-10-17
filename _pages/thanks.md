---
layout: page
title: Thank you
permalink: /thanks/
description: Your message is on its way.
sitemap: false
---

<div class="lead-form-thanks" data-thanks="contact">
  <p>Thanks for writing. I read every message myself and reply within one business day, usually sooner.</p>
  <p>While you wait, you can look at <a href="{{ '/services/' | relative_url }}">services and pricing</a> or book a <a href="{{ '/services/#pricing' | relative_url }}">free 20-minute call</a>.</p>
</div>

<div class="lead-form-thanks" data-thanks="newsletter" hidden>
  <p>Almost done. Check your inbox for a confirmation email and click the link inside to start getting the newsletter.</p>
  <p>If it is not there in a few minutes, look in your spam or promotions folder.</p>
</div>

<div class="lead-form-thanks" data-thanks="paid" hidden>
  <p>Your payment went through and Stripe has emailed you a receipt.</p>
  <p data-paid="strategy" hidden>I will email you within one business day to pick a time for your strategy session. If you would rather choose now, reply to the receipt with two or three times that suit you.</p>
  <p data-paid="build" hidden>Your build start date is reserved. I will email you within one business day to confirm the date and set up a kickoff call. The balance is due on delivery.</p>
  <p data-paid="care" hidden>Your care plan is active. I will email you within one business day to set up access and agree what to watch first. You can cancel any month.</p>
</div>

<p><a href="{{ '/' | relative_url }}">Back to the home page</a> · <a href="{{ '/blog/' | relative_url }}">Read the blog</a></p>

<script>
  (function () {
    var paid = /[?&]paid=(strategy|build|care)\b/.exec(window.location.search);
    if (paid) {
      document.querySelector('[data-thanks="contact"]').hidden = true;
      document.querySelector('[data-thanks="paid"]').hidden = false;
      document.querySelector('[data-paid="' + paid[1] + '"]').hidden = false;
      document.querySelector(".post-description").textContent = "Payment received.";
      return;
    }
    if (!/[?&]form=newsletter\b/.test(window.location.search)) return;
    document.querySelector('[data-thanks="contact"]').hidden = true;
    document.querySelector('[data-thanks="newsletter"]').hidden = false;
    document.querySelector(".post-description").textContent = "You are nearly subscribed.";
  })();
</script>
