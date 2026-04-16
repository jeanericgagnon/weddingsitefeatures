# Architecture

## Purpose

This repo is a staging ground for modular features intended for later integration into `wedding-site-Bolt`.

## Principles

- Build in isolated units
- Keep contracts explicit
- Prefer adapter layers over tight coupling
- Make handoff easy for the integrating agent
- Optimize for plug-in readiness, not fake completeness

## Feature shape

A feature should usually ship with:
- `README.md`
- `src/` for implementation
- `contracts.ts` or equivalent shape definitions
- `INTEGRATION.md`
- optional `migrations/` if backend state is involved

## Integration philosophy

Anything built here should answer:
- What does it do?
- What inputs does it require?
- What outputs/events does it emit?
- What tables/APIs/routes does it need?
- What files in `wedding-site-Bolt` are likely hookup points?

## Non-goals

- Recreating the entire main app
- Depending on hidden app globals
- Shipping features that only work in one exact local environment
