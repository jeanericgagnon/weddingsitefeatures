# Orchestrator notes — Scheduled RSVP reminders

## What this batch adds

- reminder history type
- dedupe key utility
- orchestration layer that combines:
  - pending guest selection
  - cooldown filtering
  - reachability counting
  - guardrail evaluation
  - payload creation
- tests for dedupe + orchestrator behavior

## Why it matters

This is the layer that makes the package feel implementation-ready instead of a pile of disconnected helpers.
