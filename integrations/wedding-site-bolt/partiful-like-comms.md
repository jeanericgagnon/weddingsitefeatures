# Integration brief — Partiful-like comms

## What exists today in `wedding-site-Bolt`

Confirmed existing backend pieces:
- `submit-rsvp`
- `validate-rsvp-token`
- `send-bulk-message`
- `sms-rsvp-inbound`

Confirmed docs/TODO clues:
- SMS credits / billing setup still has remaining tasks
- contact capture is explicitly listed as a future feature
- rollout docs already describe inbound YES/NO RSVP behavior

## Best integration posture

Treat this feature as a **product-layer consolidation** around existing primitives.

## Recommended next implementation order

1. build comms dashboard UI shell
2. build message composer contract + template structure
3. add guest comms timeline view
4. add unmatched/ambiguous inbound SMS review UI
5. add reminder automation rules
6. add contact capture flow

## Notes for integrating agent

The backend is not empty. Reuse it.

The main work now is:
- UX coherence
- contract cleanup
- admin visibility
- better workflowing

That is the fastest route to something that feels Partiful-like instead of stitched together.
