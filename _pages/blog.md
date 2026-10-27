---
layout: default
permalink: /blog/
title: Blog
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
full_width: true
---

<section style="background: var(--paper);">
  <div style="max-width: 880px; margin: 0 auto; padding: clamp(48px, 8vw, 96px) 24px 32px; display: flex; flex-direction: column; gap: 16px;">
    <span style="font-family: var(--sans); font-weight: 500; font-size: 16px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--rust);">Writing</span>
    <h1 style="margin: 0; font-family: var(--display); font-weight: 500; font-size: clamp(40px, 5.4vw, 60px); line-height: 1.04; letter-spacing: -0.035em; color: var(--ink);">Notes on automating a small business</h1>
    <p style="margin: 0; max-width: 36em; font-size: 18px; line-height: 1.65; color: var(--body);">Plain-language write-ups of problems I see in contractors', restaurants', property managers' and clinics' weeks, and what actually fixes them.</p>
    <a href="{{ '/feed.xml' | relative_url }}" style="display: inline-flex; align-items: center; min-height: 44px; align-self: flex-start; font-weight: 600; font-size: 16px; color: var(--rust); text-decoration: none;">Subscribe via RSS →</a>
  </div>
</section>

<section style="background: var(--paper);">
  <div style="max-width: 880px; margin: 0 auto; padding: 0 24px clamp(48px, 8vw, 80px);">
    <ol style="margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--line);">
      {%- if page.pagination.enabled -%}
        {%- assign postlist = paginator.posts -%}
      {%- else -%}
        {%- assign postlist = site.posts -%}
      {%- endif -%}

      {% for post in postlist %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        <li style="display: flex; flex-wrap: wrap; gap: 8px 32px; padding: 28px 0; border-bottom: 1px solid var(--line);">
          <time datetime="{{ post.date | date_to_xmlschema }}" style="flex: 0 0 136px; font-family: var(--mono); font-weight: 500; font-size: 16px; color: var(--muted); padding-top: 3px;">{{ post.date | date: "%b %-d, %Y" }}</time>
          <div style="flex: 1 1 420px; display: flex; flex-direction: column; gap: 6px; min-width: 0;">
            <a href="{{ post.url | relative_url }}" style="font-family: var(--display); font-weight: 500; font-size: 28px; line-height: 1.25; letter-spacing: -0.02em; color: var(--ink); text-decoration: none;">{{ post.title }}</a>
            <p style="margin: 0; font-size: 16px; line-height: 1.65; color: var(--body);">{{ post.description }}</p>
            <span style="font-size: 15px; color: var(--muted);">{{ read_time }} min read{% if post.tags.size > 0 %} · {{ post.tags | join: ", " }}{% endif %}</span>
          </div>
        </li>
      {% endfor %}
    </ol>

    {%- if page.pagination.enabled -%}
      {%- include pagination.html -%}
    {%- endif -%}
  </div>
</section>

<section style="background: var(--band); border-top: 1px solid var(--line);">
  <div style="max-width: 640px; margin: 0 auto; padding: clamp(64px, 9vw, 96px) 24px; display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center;">
    <span style="font-family: var(--sans); font-weight: 500; font-size: 16px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--rust);">Newsletter</span>
    <h2 style="margin: 0; font-family: var(--display); font-weight: 500; font-size: clamp(30px, 4vw, 37px); line-height: 1.1; letter-spacing: -0.025em; color: var(--ink);">Get the next post by email</h2>
    <p style="margin: 0; font-size: 16px; line-height: 1.7; color: var(--body);">One practical automation idea when I publish something new. Unsubscribe in one click.</p>
    {%- assign newsletter_username = site.lead_capture.newsletter_username | strip -%}
    <form style="width: 100%; display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; text-align: left;"
      data-lead-form="newsletter" data-mailto="{{ site.email }}"
      {%- if newsletter_username != "" %} action="https://buttondown.com/api/emails/embed-subscribe/{{ newsletter_username }}" method="POST"
      {%- else %} action="mailto:{{ site.email }}?subject=Subscribe%20me%20to%20the%20newsletter" method="POST" enctype="text/plain"
      {%- endif %}>
      <label for="nl-email-blog" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0);">Email address</label>
      <input id="nl-email-blog" name="email" type="email" placeholder="you@business.ca" autocomplete="email" required style="flex: 1 1 260px; min-width: 0; min-height: 50px; padding: 0 20px; border: 1px solid var(--rule-medium); border-radius: 0; font-family: var(--sans); font-size: 16px; color: var(--ink); background: var(--paper); box-sizing: border-box;">
      <input type="hidden" name="embed" value="1">
      <input type="hidden" name="tag" value="bajgai.ca">
      <button type="submit" style="flex: 0 0 auto; min-height: 50px; padding: 0 26px; border: 1px solid var(--muted); border-radius: 0; background: var(--paper); color: var(--rust); font-family: var(--sans); font-weight: 600; font-size: 16px; cursor: pointer;">Subscribe</button>
      <p class="lead-form-status" role="status" aria-live="polite" hidden style="width: 100%; margin: 8px 0 0; font-size: 14px; text-align: center;"></p>
    </form>
  </div>
</section>
