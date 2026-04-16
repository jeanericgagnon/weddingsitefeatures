# Feature spec — Partiful-like built-in comms

## Product goal

Make communications feel native to the wedding product instead of like a scattered admin utility.

## User stories

### Couples / planners
- As a host, I want to invite guests by SMS so I can get faster responses.
- As a host, I want to remind only guests who have not responded.
- As a host, I want to see who got a message, who failed, and who replied.
- As a host, I want inbound YES/NO texts to update RSVP state automatically.
- As a host, I want to message guests without exporting to another tool.

### Guests
- As a guest, I want to RSVP from my phone quickly.
- As a guest, I want reply-by-text to just work.
- As a guest, I want reminders to be short, clear, and linked to the right event.

## Core surfaces

### 1. Comms dashboard
Should show:
- message campaigns
- drafts / scheduled / sent / failed counts
- recent inbound replies
- pending guests count
- SMS credit balance if relevant

### 2. Guest messaging from guest list
Actions:
- send invite
- send reminder
- request contact info
- open full guest comms timeline

### 3. RSVP-aware templates
Template classes:
- invitation
- RSVP reminder
- event update
- final reminder
- contact completion request

### 4. Inbound reply handling
SMS replies should:
- interpret YES / NO / ambiguous text
- update RSVP when safe
- record audit trail
- surface unmatched/ambiguous cases in admin UI

## Existing repo facts that matter

Observed in the main repo:
- bulk send function already supports email and SMS channel behavior
- inbound SMS RSVP processing already exists
- RSVP validation/submission flows are already more advanced than a simple token form
- there are known TODOs around credits, tracking, failure surfacing, and contact capture

## Product gaps to close

1. unified comms UI
2. guest-level message timeline
3. template system UX
4. automation/reminder rules
5. admin handling for unmatched or ambiguous inbound SMS
6. better delivery-state visibility
7. contact capture loop for missing phone/email

## Strong recommendation

Do **not** rebuild RSVP. Build a comms layer around the current RSVP primitives.

That means:
- keep current RSVP functions
- add orchestration + UX + admin review surfaces
- normalize contracts rather than replacing working backend logic
