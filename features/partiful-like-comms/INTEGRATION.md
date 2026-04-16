# Integration — Partiful-like built-in comms

## Primary hookup targets in `wedding-site-Bolt`

### Existing backend touchpoints
- `supabase/functions/submit-rsvp/index.ts`
- `supabase/functions/validate-rsvp-token/index.ts`
- `supabase/functions/send-bulk-message/index.ts`
- `supabase/functions/sms-rsvp-inbound/index.ts`

### Likely UI hookup zones
- Guests dashboard
- Messages / Comms dashboard
- Public RSVP page / invitation flow
- Guest detail drawer or panel

## Recommended integration slices

### Slice 1 — unify product language + UI framing
Goal: make existing messaging/RSVP primitives feel like one coherent feature.

Add or align UI around:
- Invite guests
- Send reminder
- Message guests
- View replies
- Track delivery

### Slice 2 — outbound campaign composition
Needed UI behaviors:
- channel selection (`sms`, `email`)
- audience selection (`all`, `attending`, `not_responded`, `declined`, custom`)
- template selection
- schedule now / later
- preview before send

### Slice 3 — guest timeline + reply history
Needed UI behaviors:
- show last invite sent
- show reminder history
- show inbound SMS replies
- show RSVP state changes
- show failures/unmatched replies

### Slice 4 — automations
Suggested first automations:
- reminder to `not_responded` guests N days before RSVP deadline
- reminder after invite send with cooldown guard
- contact capture follow-up when phone/email missing

## Required env / services
- Twilio credentials
- Resend credentials (for email path)
- Supabase function secrets already referenced by main repo
- optional Stripe SMS credit configuration if SMS credits remain enabled

## Suggested file destinations in `wedding-site-Bolt`

### Frontend
- `src/features/comms/...`
- `src/pages/dashboard/messages/...`
- `src/components/guests/...`
- `src/lib/comms/...`

### Backend / schema
- extend current `messages` / `message_deliveries` / `sms_inbound_rsvp_events` usage
- add guest-facing audit/event aggregation if missing

## Smoke expectations after integration
- send test SMS invite
- send reminder to pending guests only
- guest replies YES/NO by SMS
- RSVP state updates correctly
- unmatched replies surface in admin review state
- message history visible per guest and per campaign
