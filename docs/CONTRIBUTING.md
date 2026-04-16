# Contributing / Build Rules

## Standard

Build features so another agent can plug them into the main app fast.

## Rules

- Keep modules small and explicit
- Document assumptions
- Prefer typed contracts
- Include an integration checklist
- If a feature needs backend changes, separate:
  - schema/migration notes
  - API contract
  - UI behavior
- Do not bury requirements in chat-only context

## Done means

A feature is only done when it includes:
- implementation artifact(s)
- integration instructions
- known assumptions / gaps
- file map for expected destination in `wedding-site-Bolt`
