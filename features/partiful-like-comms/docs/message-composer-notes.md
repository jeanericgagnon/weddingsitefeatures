# Message composer notes

## What this artifact is

This is the first concrete front-end artifact for the Partiful-like comms feature.

It provides:
- composer state types
- starter SMS/email templates
- merge-variable substitution helpers
- preview builder
- a simple React example component

## Why this is the right first artifact

The composer is the leverage point for:
- invites
- reminders
- announcements
- RSVP follow-up

It also maps cleanly to the already-existing `send-bulk-message` backend behavior.

## Intended integration path

In `wedding-site-Bolt`, this should eventually connect to:
- guest audience filters
- saved templates in DB
- `messages` table create/update flows
- scheduled send flow
- preview + confirm modal

## Known limits of this first version

- no styling system coupling
- no persistence layer
- no API adapter yet
- no delivery analytics UI yet
- no automation builder yet

## Next logical artifact

Either:
1. API adapter + payload mapper for `send-bulk-message`, or
2. guest comms timeline UI shell

If speed matters, do the payload mapper next.
