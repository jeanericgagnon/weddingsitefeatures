# Phased plan — Partiful-like built-in comms

## Phase 1 — product wrapper over existing backend

Goal: make current capabilities usable and coherent.

Ship:
- comms feature framing in UI
- campaign composer spec
- guest timeline spec
- inbound reply review queue spec
- contract normalization

## Phase 2 — reminders + automation

Ship:
- pending RSVP reminder templates
- RSVP deadline reminder rules
- send-to-filtered-audience workflows
- cooldown / duplicate-send protections

## Phase 3 — contact completion + invite recovery

Ship:
- secure guest contact capture link
- missing contact follow-up flow
- invite resend / channel recovery path

## Phase 4 — deeper Partiful-like polish

Ship:
- better guest conversation history
- richer template system
- delivery + engagement insights
- admin recommendations (who to remind next)

## Anti-goals

- don’t bolt on a giant CRM
- don’t create multiple conflicting RSVP sources of truth
- don’t hide message failures behind fake success states
