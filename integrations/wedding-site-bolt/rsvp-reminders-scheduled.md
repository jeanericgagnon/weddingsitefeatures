# Integration brief — Scheduled RSVP reminders

## Purpose

Introduce a tight reminder-send workflow for guests who have not RSVP’d.

## Main repo dependencies
- guest `rsvp_status`
- `messages` scheduling fields/status
- `send-bulk-message`
- SMS segment meter product layer
- delivery result surfaces

## Best UI landing spots
- Guests dashboard bulk action: `Remind non-responders`
- Messages dashboard: saved/scheduled reminder campaigns
- RSVP dashboard shortcut card

## Recommended implementation order
1. pending audience preset
2. send/schedule reminder composer
3. SMS segment meter
4. duplicate-send guardrails
5. reminder history/results
