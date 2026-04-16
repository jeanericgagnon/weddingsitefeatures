# weddingsitefeatures

Plug-in-ready feature workspace for the DayOf / `wedding-site-Bolt` app.

This repo is **not** the main product repo. It exists to build isolated features, contracts, specs, and handoff-ready integration artifacts that can be merged into the main app later without thrashing the main build thread.

## Goal

Build here with:
- clear boundaries
- explicit contracts
- grounded integration notes
- minimal coupling to the main app
- no direct edits to `wedding-site-Bolt`

## Structure

- `features/` — self-contained feature modules
- `contracts/` — shared types, API shapes, event payloads, integration contracts
- `integrations/` — notes and adapter examples for plugging features into the main app
- `docs/` — architecture notes, decisions, and implementation guides
- `examples/` — minimal usage examples / reference shells

## Current major package

### `features/partiful-like-comms/`
A communications subsystem package built to layer on top of the real texting/messaging infrastructure already present in `wedding-site-Bolt`.

Includes:
- composer + templates
- send adapter
- guest timeline
- reminder automation
- contact capture
- inbound review queue
- campaign analytics
- template manager
- event aggregation
- schema/API contracts
- SMS segment billing/metering spec + utilities
- grounded audit docs for the main repo texting implementation

## Working pattern

Each feature should ideally include:
- its own README
- UI/components or logic
- required data contract(s)
- migration notes if persistence is needed
- integration checklist for `wedding-site-Bolt`

## Status

Initial scaffold created on 2026-04-16.
Expanded significantly with grounded comms/product integration work.
