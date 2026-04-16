# Contact capture notes

## What this batch adds

- request/submission type shapes
- guest-facing contact capture form shell

## Why it matters

Missing phone/email is one of the dumbest operational blockers in guest comms. This closes that gap directly.

## Intended main-repo flow

- host triggers secure contact request
- guest opens tokenized form
- guest submits email/phone/consent
- app updates guest record
- app logs audit event
- app optionally hands off into RSVP flow
