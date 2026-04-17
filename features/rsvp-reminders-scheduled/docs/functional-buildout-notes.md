# Functional buildout notes — Scheduled RSVP reminders

## What this batch adds

- pending guest audience logic
- reachable audience counting by channel
- schedule generation from RSVP deadline
- recent-reminder cooldown filtering
- save/send helper pattern
- tests for audience/schedule/filter behavior

## Why it matters

This is the layer that starts turning the reminder package into something the integrating agent can actually wire, not just admire.
