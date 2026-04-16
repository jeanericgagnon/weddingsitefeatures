# Main repo user feature inventory (`wedding-site-Bolt`)

This is a grounded inventory of user-facing product features observed in the main repo.
No changes were made to the main repo.

## Big picture

`wedding-site-Bolt` is not just a wedding website builder.
It is a broader wedding product with:
- public wedding sites
- RSVP + guest management
- planning tools
- messaging/comms
- seating/check-in/event-day tools
- registry
- photo/vault/media features
- onboarding/setup flows
- dashboard/admin surfaces

## Observed public-facing pages

### Core site/product pages
- Home / marketing (`Home.tsx`, `Product.tsx`)
- Templates catalog (`Templates.tsx`)
- Template detail (`TemplateDetail.tsx`)
- Site view / wedding site display (`SiteView.tsx`)
- RSVP page (`RSVP.tsx`)
- Photo upload (`PhotoUpload.tsx`)
- Vault contribute (`VaultContribute.tsx`)
- Payment success / payment required flows
- Signup / auth-ish entry pages

### Feature marketing pages
- Guests
- Messaging
- RSVP
- Registry
- Seating
- Travel

### Onboarding/setup pages
- Guided setup
- Quick start
- Wedding status
- Celebration setup
- Setup shell

## Observed dashboard/admin features

### Overview / admin shell
- Dashboard overview
- Settings
- Error logs
- aggregate analytics helpers

### Guests / RSVP / communication
- Guests dashboard
- Messages dashboard
- RSVP board
- address collection appears shipped per roadmap
- messaging/comms infra exists
- reminder logic is referenced in roadmap/docs

### Planning tools
- Planning overview
- Budget tab
- Tasks tab / checklist
- Vendors tab
- Timeline/planning area

### Registry / gifting
- Registry dashboard
- Registry item card/form
- Registry services/types

### Seating / event-day
- Seating dashboard
- Seating lookup
- Coordinator mode
- guest check-in / event-day flows are strongly signaled by page names/docs

### Media / memories
- Guest photo sharing
- Vault
- photo upload planning/docs

## Builder / template system signals

The repo has substantial builder/template infrastructure:
- `src/builder`
- `src/builder-v2`
- `src/templates`
- `src/sections`
- many section variants

That implies the website-builder side includes:
- editable site sections
- theme/template switching
- section variants
- likely template preview/capture tooling

## Roadmap-grounded feature list observed in docs

From `docs/feature-roadmap-full-list.md`, the main product appears to target or already include:

### Wedding site & guest experience
- website builder
- design templates
- schedule / story / FAQ / travel / wedding party style sections
- RSVP dashboard
- automated reminders

### Invitations & communication
- digital invitations (email flows exist)
- address collection tool
- guest messaging
- future QR access flow
- future SMS RSVP links
- future guestbook / well wishes wall

### Registry & gifting
- universal registry links
- cash/honeymoon funds
- gift tracking
- future group gifting / thank-you tracker

### Planning tools
- budget tracker
- checklist
- timeline builder
- seating chart
- vendor manager

### Event-day tools
- guest check-in system (lite)
- future live RSVP board display
- future digital seating display / guest lookup
- future coordinator mode expansion
- future song request system

### Media & memory
- guest photo uploads
- time capsule / vault
- future AI slideshow / anniversary email / private archive mode

### Analytics & admin
- basic analytics
- RSVP export/reporting
- registry analytics
- basic owner/admin flow
- future multi-admin / RBAC / audit log UI

## Strongest currently-real user features

Based on actual files + docs together, the strongest currently-real surfaces appear to be:
- wedding website viewing/building
- RSVP flow
- guests dashboard
- messages dashboard
- planning tabs (budget/tasks/vendors)
- seating dashboard
- registry dashboard
- photo sharing / vault
- onboarding/setup flows

## What this means

The product is already broad.
So future feature work should be careful not to act like this is only:
- a website builder, or
- only an RSVP tool

It’s already becoming a wedding operating system.
