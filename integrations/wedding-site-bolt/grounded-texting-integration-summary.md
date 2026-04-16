# Grounded texting integration summary

This summary is based on the actual `wedding-site-Bolt` texting implementation.
No main-repo changes were made.

## What is already real
- Twilio SMS send path exists
- SMS credit purchase path exists
- SMS credit expiry path exists
- inbound SMS RSVP exists
- message/delivery persistence exists

## What is not yet good enough
- SMS billing is recipient-count oriented, not segment-accurate
- custom guest targeting looks incomplete
- delivery/failure visibility needs stronger product surfacing
- composer-side SMS cost transparency is missing

## Best next integration direction
Use the feature-repo comms package as the product/UI/spec layer on top of the main repo’s real infra.
Do not rebuild texting from scratch.
