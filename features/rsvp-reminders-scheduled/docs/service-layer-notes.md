# Service layer notes — Scheduled RSVP reminders

## What this batch adds

- reminder history helpers
- campaign summary builder
- single service entrypoint for preparing reminder campaign payloads
- tests for history, summary, and service behavior

## Why it matters

This is the closest thing yet to a drop-in implementation surface.
An integrating agent can call one service prep function instead of stitching five helpers together by hand.
