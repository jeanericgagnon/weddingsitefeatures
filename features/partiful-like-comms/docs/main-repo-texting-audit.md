# Main repo texting audit (`wedding-site-Bolt`)

## Scope

This audit is grounded in the current `wedding-site-Bolt` repo and is written here only for integration planning. No changes are made to the main repo.

## Confirmed existing infra

### Edge functions
- `supabase/functions/send-bulk-message/index.ts`
- `supabase/functions/sms-rsvp-inbound/index.ts`
- `supabase/functions/stripe-create-sms-credits/index.ts`
- `supabase/functions/stripe-webhook/index.ts`

### Confirmed data model usage
- `messages`
- `message_deliveries`
- `sms_credit_transactions`
- `wedding_sites.sms_credits_balance`
- `sms_inbound_rsvp_events`

## Confirmed current behavior

### Outbound send flow
`send-bulk-message`:
- loads a `messages` row
- resolves audience by broad filters
- fetches guests by `wedding_site_id`
- sends SMS through Twilio
- inserts delivery rows into `message_deliveries`
- updates `messages` final send stats/status

### SMS billing/consumption behavior
Current logic is effectively recipient-count based:
- it checks available SMS credits against `eligibleGuests.length`
- it deducts credits by `eligibleGuests.length`
- it writes usage transaction with `credits_delta = -eligibleGuests.length`

This means the current system behaves like:
- 1 recipient send ≈ 1 credit

### SMS credit purchase behavior
`stripe-create-sms-credits` + `stripe-webhook` support:
- credit pack purchases (100 / 500 / 1000)
- `sms_credit_transactions` purchase rows
- `wedding_sites.sms_credits_balance` incrementing
- 12-month expiry windows on purchased credits

### Inbound SMS behavior
`sms-rsvp-inbound`:
- normalizes phone/body
- attempts guest/site matching
- interprets YES/NO-ish replies
- updates guest RSVP status when matched
- writes audit rows to `sms_inbound_rsvp_events`

## Confirmed product/ops gaps
- no segment-aware billing
- no composer-side live segment meter
- no soft low-balance warning based on segment usage
- custom guest-id targeting is not obviously implemented in `send-bulk-message`
- failure reasons are not yet clearly elevated in UI

## Bottom line

The texting infra is real and usable.

But billing is still too blunt. It is credit-per-recipient oriented, not segment-accurate. That is the main pricing/control weakness.
