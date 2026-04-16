# Main repo file-by-file texting map

Grounded from current audit of `wedding-site-Bolt`.
This is for integration/handoff only.

## `supabase/functions/send-bulk-message/index.ts`
Owns:
- loading `messages`
- audience selection
- guest resolution
- Twilio SMS send
- Resend email send
- SMS credit deduction
- delivery row inserts
- message status updates

## `supabase/functions/sms-rsvp-inbound/index.ts`
Owns:
- inbound SMS normalization
- guest/site matching
- YES/NO interpretation
- RSVP state update
- `sms_inbound_rsvp_events` audit writes

## `supabase/functions/stripe-create-sms-credits/index.ts`
Owns:
- Stripe checkout session creation for SMS packs
- pack sizes: 100 / 500 / 1000

## `supabase/functions/stripe-webhook/index.ts`
Owns:
- SMS credit purchase fulfillment
- `sms_credit_transactions` purchase rows
- `wedding_sites.sms_credits_balance` increments
- 12-month expiration timestamps

## `docs/LATER_TODO_MESSAGING_AND_CONTACT_CAPTURE.md`
Documents:
- remaining SMS credit setup tasks
- product gaps in messaging
- contact capture future work

## Highest leverage patch target
If one file gets the most leverage, it’s:
- `supabase/functions/send-bulk-message/index.ts`

Why:
- that’s where billing truth, audience targeting truth, and send behavior converge.
