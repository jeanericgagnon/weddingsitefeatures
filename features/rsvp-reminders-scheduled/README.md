# Scheduled RSVP reminders for non-responders

A focused feature package for sending scheduled reminder texts or emails to guests who have not RSVP’d yet.

## Goal

Make it dead simple for a host to:
- target non-responders
- choose a reminder template
- send now or schedule for later
- track what happened

## MVP outcome

A host can open reminders, select the `Not Responded` audience, pick a template, choose a send time, and create a scheduled reminder campaign.

## Why this feature matters

This is one of the highest-value communication workflows in the wedding product.
It directly improves RSVP completion without requiring a huge messaging platform.

## Core scope
- pending guest targeting
- send now / schedule later
- reminder templates
- segment-aware SMS meter
- duplicate-send guardrails
- delivery result visibility

## Related existing infra in `wedding-site-Bolt`
- `messages` rows with scheduling concepts
- `send-bulk-message`
- guest RSVP status filtering
- SMS/email messaging infrastructure

## Files in this package
- `INTEGRATION.md`
- `contracts/reminder-contracts.ts`
- `src/reminderSchedulerTypes.ts`
- `src/reminderSchedulerExample.tsx`
- `docs/feature-spec.md`
- `docs/mvp-checklist.md`
