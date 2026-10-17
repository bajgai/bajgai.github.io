---
layout: post
title: "Tenant requests that sort themselves: automation for property managers"
date: 2026-10-17 12:10:00
description: How small landlords and property managers can use AI to triage maintenance requests, route them to the right trade and keep tenants updated, without missing an emergency.
tags: small-business automation property-management real-estate
categories: examples
---

If you manage a handful of rental units, or a few hundred, maintenance requests arrive the same way: a text at 10 pm, an email with no unit number, a voicemail about "the thing in the bathroom". Each one needs reading, sorting, a trade booked, the tenant updated and the details written down somewhere.

This is a good fit for automation, as long as it's set up so that emergencies always reach a person straight away.

This post walks through a typical setup. It's a sample flow, not a specific client's.

<!-- NIRI: if you have a property manager contact willing to share how they handle requests today, a short quote would help a lot here. -->

## The flow

### 1. One way in

Tenants report issues through a single form or a dedicated number they can text. The form asks for unit, a description, photos, and the best time to access the unit. Texts and emails that arrive elsewhere get forwarded to the same place.

One way in is half the battle. It means nothing gets lost in someone's personal phone.

### 2. AI sorts the request

An AI model reads the description (and can describe the photos) and sorts each request:

- **Emergency:** water leak, no heat in winter, gas smell, electrical hazard, a lock-out, a security problem.
- **Urgent:** something that affects daily living but isn't dangerous, like a broken fridge or one toilet out of two not working.
- **Routine:** a dripping tap, a sticky door, a burnt-out bulb in a common area.

It also picks the likely trade (plumber, electrician, HVAC, appliance, general handyman) and pulls out the unit and access details.

### 3. Emergencies go to a person, immediately

This is the most important rule. Anything the AI marks as an emergency, or isn't sure about, triggers a phone call or urgent text to whoever is on call. The tenant also gets an immediate message with the emergency contact number and basic safety steps you've approved in advance, such as how to shut off the water.

AI never decides that something is *not* an emergency on its own if the tenant says it is. In Calgary, no heat in January is not a routine ticket.

### 4. Routine and urgent requests get routed

For non-emergencies, the automation:

- creates a work order with all the details,
- sends it to your preferred trade for that kind of job, or to you for approval first,
- tells the tenant it's been received and roughly what happens next.

### 5. Everyone stays updated

When the trade books a time, the tenant is told. When the job is marked done, the tenant gets a short "is everything working?" message. If they say no, the work order reopens.

### 6. The record keeps itself

Every request, photo, message and invoice ends up attached to the unit. That's useful at move-out, for insurance, for spotting units with repeat problems, and for knowing what each property actually costs to maintain.

## Tools

Property management software like Buildium, AppFolio or Rentec has maintenance request features built in, and if you already use one, start there. The automation layer adds the AI sorting, the on-call alerts and the tenant updates in plain language.

If you manage a smaller portfolio and use email and spreadsheets, the whole flow can be built with a form, an automation platform, an AI model and a shared spreadsheet or Airtable base.

## A note on the rules

Alberta's residential tenancy rules set out landlord and tenant responsibilities for repairs and entering a unit. An automation should support those rules, not shortcut them. For example, entry notices should still go out the way the rules require. If you're not sure what applies to you, check the Government of Alberta's residential tenancy information or get advice.

Tenant information is personal information too, so the [privacy checklist in my PIPA post]({% post_url 2026-10-17-ai-tools-customer-data-alberta-pipa %}) applies here.

## Is it worth it?

For a landlord with a few units, a simple form and a good spreadsheet may be enough. Once you're handling more than a few requests a week, or you have staff on call, the time saved and the emergencies caught faster usually justify a build.

If you manage rentals in Calgary or anywhere in Alberta and want to talk it through, [book a free 20-minute discovery call](/services/).
