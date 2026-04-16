# `send-bulk-message` adapter notes

## Why this exists

The main repo already has a sending function, but the composer module needed a clean mapper from front-end state to the existing backend shape.

## Observed backend expectations in `wedding-site-Bolt`

The current edge function reads from a `messages` row and expects fields like:
- `wedding_site_id`
- `channel`
- `audience_filter`
- `recipient_filter`
- `subject`
- `body`
- `status`
- `scheduled_for`

It then invokes delivery behavior based on `messageId`.

## What this adapter provides

- front-end composer -> `messages` insert payload mapper
- scheduled-vs-queued status derivation
- invoke payload builder for `send-bulk-message`
- a Supabase example showing the intended save/send flow

## Important caveat

The current observed backend appears to filter guests by audience values like:
- `all`
- `attending`
- `not_responded`
- `declined`

`custom` audience support is represented in `recipient_filter`, but the current backend snippet did **not** obviously show custom guest-id filtering logic.

That means one of two things is needed in the main repo:
1. extend `send-bulk-message` to respect `recipient_filter.guestIds` when `audience = custom`, or
2. avoid exposing custom-send in UI until that exists

## Recommendation

Implement custom-recipient support in the main repo before shipping the full composer UI.
That’s the obvious missing link.
