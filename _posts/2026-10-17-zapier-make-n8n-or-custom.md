---
layout: post
title: "Zapier, Make, n8n or custom: what to pay for and what to skip"
date: 2026-10-17 12:09:00
description: A plain comparison of the main automation platforms for Canadian small businesses, how their pricing works, and when a custom build is worth it.
tags: small-business automation tools pricing
categories: pricing
---

If you've started looking into automation, you've probably come across Zapier, Make and n8n. They all connect your apps so that something happening in one (a form filled in, an invoice paid) triggers something in another. They also all charge in different ways, and the bill can grow without you noticing.

Here's how I think about choosing between them, and when none of them is the right answer.

**A note on prices:** these tools change their plans often and mostly charge in US dollars, so I haven't listed exact prices. Check each tool's pricing page, and remember the exchange rate when you compare them with Canadian costs.

## How they charge

- **Zapier** charges by the number of **tasks**, which are the individual actions your automations perform. Triggers aren't counted, so an automation with a trigger and four actions that runs 100 times a month uses about 400 tasks.
- **Make** charges by **operations** or credits, which are similar: each module that runs counts. It's usually cheaper per action than Zapier, but harder to estimate up front.
- **n8n** has a free Community edition you can run on your own server, so you pay for hosting rather than per action, or you can use n8n's paid cloud service. It isn't open source in the strict sense: its Sustainable Use License allows self-hosting for your own business's internal use but restricts things like reselling hosted access, which is fine for most small businesses.

The practical upshot: a low-volume automation is cheap on any of them. A high-volume one (hundreds of runs a day) can get expensive on per-task pricing, and that's where Make or self-hosted n8n start to make sense.

## Which one when

### Zapier: easiest to start with

- Connects to the most apps out of the box.
- Simplest to set up and understand.
- Good for simple, low- to medium-volume automations.
- Gets expensive as volume and complexity grow.

**Pick it if** you want to build simple automations yourself and you value ease of use over cost.

### Make: more power per dollar

- Visual builder that handles branching, loops and data reshaping well.
- Usually cheaper than Zapier at the same volume.
- Steeper learning curve.

**Pick it if** your automations have several branches or you run them a lot.

### n8n: most control

- Can be self-hosted, so you control where data lives. That's useful for privacy, including [Alberta's PIPA requirements]({% post_url 2026-10-17-ai-tools-customer-data-alberta-pipa %}) around storing data outside Canada.
- Strong AI features for building workflows that use language models.
- Self-hosting means someone has to keep the server updated and backed up.

**Pick it if** you have higher volumes or data you'd rather keep on a server you control, and you have someone to look after it.

### Custom code: when the platforms don't fit

A small custom script or app is worth it when:

- the volume is high enough that per-task pricing is a real monthly cost,
- you need something the platforms can't do cleanly,
- the logic is complicated enough that a visual builder becomes a tangle.

The trade-off is that someone needs to maintain it. For most small businesses, a platform is the right starting point.

## What to skip

- **Paying for a big plan "in case".** Start on the smallest plan that fits, watch your usage for a month, then adjust.
- **Automating every small thing.** Each automation is something that can break. Automate the tasks that cost real time or money.
- **Tools you don't own.** Whoever builds your automations, make sure they run in accounts you own and you can remove outside access at any time. That's how I set up every build: software subscriptions are billed to you directly, so you keep ownership.

## The cost that matters most

The platform bill is usually the smallest part. The bigger costs are the time it takes to build automations properly, and the cost of ones that break quietly and nobody notices. I wrote about that in [why automations break]({% post_url 2026-10-17-why-automations-break %}).

If you're stuck choosing, or you've built something that's getting expensive, [book a free 20-minute discovery call](/services/). I work with all three platforms and custom code, and I'll recommend whichever is cheapest to run for what you actually need.
