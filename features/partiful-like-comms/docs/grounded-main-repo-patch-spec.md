# Grounded main-repo patch spec

This is a patch spec only. It is based on the current `wedding-site-Bolt` texting infra but does not edit that repo.

## Patch set A — segment-aware SMS usage

### Current behavior observed
`send-bulk-message` currently:
- checks credits against `eligibleGuests.length`
- deducts credits by `eligibleGuests.length`

### Intended behavior
- estimate `segmentsPerMessage` from `message.body`
- compute `totalSegmentsNeeded = segmentsPerMessage * eligibleGuests.length`
- validate credits against `totalSegmentsNeeded`
- deduct credits using `totalSegmentsNeeded`
- persist usage metadata with segment counts

## Patch set B — custom audience support

### Current behavior observed
Broad audience filtering is present.
Custom guest-id targeting is not clearly honored.

### Intended behavior
When `recipient_filter.audience === 'custom'`:
- require non-empty `guestIds`
- restrict guest query by guest IDs
- preserve `wedding_site_id` scope
- do not silently widen the send

## Patch set C — better delivery/failure visibility

### Current behavior observed
Carrier/API errors do land in `message_deliveries.error_message`.

### Intended behavior
Elevate these to product/UI via:
- campaign analytics surfaces
- guest timelines
- admin review panels

## Patch set D — soft warning behavior

### Intended behavior
Surface low-balance warnings when usage crosses ~80% of included segment allocation.
This should be a product-layer warning, not a premature hard block.
