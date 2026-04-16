# Guest comms timeline notes

## What this artifact is

A simple timeline shell for guest-level communications history.

## Why it matters

Partiful-like comms only feels real if hosts can answer:
- Did we invite them?
- Did it deliver?
- Did they reply?
- Did their RSVP update?
- Did follow-up fail?

## Intended future data sources in `wedding-site-Bolt`

This view should eventually aggregate from things like:
- `messages`
- `message_deliveries`
- `sms_inbound_rsvp_events`
- RSVP change/audit rows
- contact capture events if added

## Current purpose

This is a front-end shell and event contract starter so the integrating agent has a clean target.
