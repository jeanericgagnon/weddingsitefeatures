# Inbound review queue notes

## What this batch adds

- queue item contract
- unmatched/ambiguous inbound SMS review UI shell

## Why it matters

Real messaging systems get messy. Numbers mismatch. Guests text weird shit. Carriers do annoying things. If there’s no review queue, ops gets blind-sided.

## Intended data source

This should eventually read from `sms_inbound_rsvp_events` and any future reconciliation/match audit tables.
