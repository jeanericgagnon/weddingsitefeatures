# Grounded segment migration plan

## Rule

Do not modify `wedding-site-Bolt` here.
This document describes the exact migration direction based on the current live repo shape.

## Goal

Move the texting product from:
- recipient-count billing

to:
- segment-aware billing and UX

## Why this is necessary

Current main-repo SMS usage deduction appears to charge by recipient count, not by real SMS segment consumption.

That leaves margin exposed to:
- long messages
- emoji/unicode sends
- multi-segment SMS inflation

## Recommended migration path

### Phase 1 — product/UI truth
In product and billing surfaces, switch language to:
- `1,000 segments included`

Do not say:
- `1,000 texts included`

### Phase 2 — composer metering
Use the feature-repo segment utilities to surface in the SMS composer:
- characters used
- segment threshold (`160` GSM / `70` unicode)
- segments used
- remaining included segments
- soft warning at ~80% usage

### Phase 3 — send-time segment calculation
In the main repo send path, before credit deduction:
- estimate message segment count from `message.body`
- compute total segment cost as `segmentsPerMessage * eligibleGuestCount`
- validate balance against total segment cost, not guest count

### Phase 4 — transaction/accounting upgrade
When consuming SMS credits in the main repo:
- deduct by total segment count
- store usage metadata including:
  - per-message segment count
  - total segments consumed
  - encoding mode or threshold basis

### Phase 5 — analytics visibility
Expose in analytics/billing UI:
- segments consumed per campaign
- remaining segment balance
- cost spikes caused by long/unicode messages

## Compatibility note

A good staged rollout can keep the existing `sms_credit_transactions` table while changing the semantics from pseudo-message credits to real segment credits.

That is probably the least disruptive path.
