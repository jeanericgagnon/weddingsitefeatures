# Integration checklist by screen

## Messages dashboard
- [ ] add composer entry point
- [ ] add campaign analytics view
- [ ] add template manager view
- [ ] add inbound review queue view
- [ ] wire send-now flow to `send-bulk-message`

## Guests dashboard
- [ ] add invite/reminder/contact-request bulk actions
- [ ] add guest timeline drawer/panel
- [ ] add custom audience send entry
- [ ] hide custom audience until backend guest-id filtering exists

## Public RSVP
- [ ] add contact capture handoff when guest info missing
- [ ] clarify SMS RSVP behavior in guest-facing copy

## Backend
- [ ] honor `recipient_filter.guestIds` for custom audience sends
- [ ] expose review-resolution action for inbound SMS queue
- [ ] add contact capture request lifecycle storage if missing
- [ ] expose guest-level aggregated comms timeline endpoint/view
