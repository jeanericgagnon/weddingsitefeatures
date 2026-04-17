# Feature spec — Scheduled RSVP reminders

## Problem

Hosts need a fast way to chase non-responders without manually filtering, drafting, and sending each time.

## Product goal

Make reminder sends for pending guests a one-flow action.

## MVP

A host can:
- target guests with `rsvp_status = pending`
- choose SMS or email
- pick a reminder template
- send now or schedule for later
- see basic usage/cost impact for SMS

## Key UX requirements
- default to the non-responder audience
- no giant segmentation UI needed
- dead simple scheduling UX
- segment-aware SMS visibility
- clear result tracking later

## Recommended presets
- 7 days before deadline
- 3 days before deadline
- 1 day before deadline

## Guardrails
- prevent duplicate reminders too close together
- warn if SMS sending/compliance is unavailable
- warn when segment balance is low
