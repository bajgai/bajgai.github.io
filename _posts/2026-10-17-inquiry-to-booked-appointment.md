---
layout: post
title: From website inquiry to booked appointment in two minutes, step by step
date: 2026-10-17 12:05:00
description: A walkthrough of a typical booking automation for clinics, salons and consultants, from the moment someone fills in your form to the reminder the day before.
tags: small-business automation booking
categories: examples
---

A new inquiry is the most valuable message your business gets all day. It's also the one most likely to sit in an inbox until the evening, by which point the person has booked somewhere else.

This post walks through a typical automation that takes a website inquiry and turns it into a booked appointment in about two minutes, without you touching it. It's a sample setup, not a specific client's, and the details change from business to business. The shape stays the same.

<!-- NIRI: when you have a real or demo build of this flow, add screenshots of each step and a line on how long it took to set up. -->

## Who this is for

Any business where the next step after an inquiry is "book a time": physiotherapists, massage therapists, dentists, salons, tutors, accountants, consultants, photographers, home-service estimates.

## The flow at a glance

1. Someone fills in your website form.
2. AI reads the message and works out what they need.
3. They get a personal reply with the right booking link within a minute or two.
4. If they book, everything else updates on its own.
5. If they don't, a gentle follow-up goes out.
6. You see a short summary instead of a pile of emails.

## Step 1: The form asks the right questions

The form should ask only what you need to point someone to the right appointment: name, email or phone, what they need help with, and maybe how soon. Every extra field means fewer people finish the form.

A free-text box ("Tell us a bit about what's going on") is fine. That's what the AI is for.

## Step 2: AI sorts the request

When the form is submitted, the automation sends the message to an AI model with a short brief about your business: your services, who each one is for, your hours and what you don't do.

The AI returns a few simple answers:

- **Type:** new client, existing client, question, or not a fit.
- **Best service:** for example "initial assessment, 60 minutes" or "colour consultation".
- **Urgency:** normal, soon, or urgent.
- **Anything you need to know:** a one-line summary.

It doesn't make medical, legal or financial judgements. If the message looks like an emergency, or it isn't sure, it flags it for you instead of guessing.

## Step 3: A personal reply goes out

Within a minute or two, the person gets an email or text written in your voice:

> Hi Sam, thanks for getting in touch about your shoulder. For a first visit we'd start with a 60-minute initial assessment. You can pick a time that suits you here: [booking link]. If none of those times work, just reply and we'll sort something out.

The booking link goes straight to the right appointment type in your booking tool (Calendly, Cal.com, Jane, Square Appointments, Acuity or whatever you already use), so they don't have to choose from a long menu.

## Step 4: Booking updates everything

When they book, the automation:

- adds them to your client list or CRM, with the AI's summary attached,
- sends any intake form you use,
- sets reminders by text or email, for example the day before,
- tells you, in one short notification.

## Step 5: The follow-up for people who don't book

Plenty of people mean to book and forget. If nobody has booked a day or two after the first reply, one friendly follow-up goes out. If they still don't book, the automation stops. Nobody likes being chased five times.

## Step 6: Your summary

At the end of each day, or each morning, you get a short list: new inquiries, who booked, who didn't, and anything flagged for you. That's the only part you have to read.

## What it costs to run

The ongoing cost is mostly the tools you already pay for, plus a small amount for the automation platform and AI usage. For most small businesses that comes to a few dollars to a few tens of dollars a month, depending on volume and which tools you use.

The setup is the bigger cost. A build like this falls under the automation builds on my [services page](/services/), which start at $1,200 CAD.

## Doing it yourself

You can build a simple version yourself with your booking tool's own features: an auto-reply that includes your booking link, built-in reminders, and a weekly look at who enquired but didn't book. That gets you a lot of the benefit for free.

The AI sorting, the personal reply and the follow-up are where it starts to need a proper build.

If you want to talk through what this would look like for your business, [book a free 20-minute discovery call](/services/). And if most of your inquiries come in by phone rather than through a form, start with [the missed call post]({% post_url 2026-10-17-missed-calls-calgary-service-business %}).
