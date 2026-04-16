# Partiful-like built-in comms

A plug-in-ready communications feature package for DayOf / `wedding-site-Bolt`.

## Scope

This feature package is centered around guest communications:
- SMS invites
- reminders
- RSVP flows
- guest messaging
- delivery / reply tracking

## Why this exists

The main app already has pieces of this in-flight, but they appear spread across backend functions and rollout docs. This module turns that into a cleaner product surface and integration plan.

## Existing groundwork already found in `wedding-site-Bolt`

Backend/function-level work already exists for:
- `supabase/functions/submit-rsvp`
- `supabase/functions/validate-rsvp-token`
- `supabase/functions/send-bulk-message`
- `supabase/functions/sms-rsvp-inbound`

There are also rollout and TODO docs indicating:
- Twilio-based SMS send flow
- SMS credits / billing work
- inbound YES/NO RSVP handling
- messaging/contact-capture gaps still open

## What this feature package adds

This package defines the missing product-level structure:
- feature contract
- UX surface map
- integration plan
- phased backlog
- recommended data model additions / cleanup directions

## Desired product outcome

A couple should be able to:
1. invite guests by SMS or email
2. send reminders to non-responders or selected groups
3. collect RSVPs through link or text reply
4. view message history, delivery status, and response outcomes
5. follow up with guests without leaving the app

## Deliverables in this package

- `INTEGRATION.md`
- `contracts/comms-contracts.ts`
- `docs/feature-spec.md`
- `docs/phased-plan.md`

## Important note

This package is intentionally integration-first. It does not assume the main app should be rewritten. It is designed to plug into the current backend shape and improve the product surface cleanly.
