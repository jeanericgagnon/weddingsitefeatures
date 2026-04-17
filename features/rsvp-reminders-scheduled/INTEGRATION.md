# Integration — Scheduled RSVP reminders

## Main repo touchpoints

### Backend / data
- `messages`
- `send-bulk-message`
- guests filtered by `rsvp_status = pending`
- scheduled message processing path

### UI hookup zones
- Guests dashboard bulk actions
- Messages dashboard composer / campaign list
- RSVP dashboard shortcuts

## Suggested UX flow

1. Host chooses `Remind non-responders`
2. App targets pending guests
3. Host selects template
4. App shows SMS segment usage + remaining balance
5. Host chooses `Send now` or `Schedule`
6. App creates queued/scheduled campaign
7. App surfaces sent/failed results later

## Recommended defaults
- 7 days before RSVP deadline
- 3 days before RSVP deadline
- 1 day before RSVP deadline

## Guardrails
- warn if a guest was reminded recently
- prevent obviously duplicate sends
- hide SMS send if compliance/deliverability is not live
