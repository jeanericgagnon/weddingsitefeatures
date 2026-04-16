# weddingsitefeatures

Plug-in-ready feature workspace for the DayOf / `wedding-site-Bolt` app.

This repo is **not** the main product repo. It exists to build isolated features that can be integrated into the main app later without dragging along unrelated app state.

## Goal

Build features here with:
- clear boundaries
- explicit contracts
- drop-in integration notes
- minimal coupling to the main app

## Structure

- `features/` — self-contained feature modules
- `contracts/` — shared types, API shapes, event payloads, integration contracts
- `integrations/` — notes and adapter examples for plugging features into the main app
- `docs/` — architecture notes, decisions, and implementation guides
- `examples/` — minimal usage examples / reference shells

## Working pattern

Each feature should ideally include:
- its own README
- UI components or logic
- required data contract(s)
- migration notes if persistence is needed
- integration checklist for `wedding-site-Bolt`

## Suggested flow

1. Build a feature in `features/<feature-name>/`
2. Define contracts in `contracts/`
3. Add integration notes in `integrations/wedding-site-bolt/`
4. Keep assumptions explicit
5. Avoid hidden dependencies on the main app

## First scaffolded feature targets

This repo is ready for:
- RSVP enhancements
- guest experience modules
- wedding page sections
- admin/dashboard widgets
- messaging flows
- planning/coordinator tools

## Status

Initial scaffold created on 2026-04-16.
