# Custom audience support spec

## Problem

The new comms composer can represent `custom` recipient targeting, but the observed `send-bulk-message` backend in `wedding-site-Bolt` appears to primarily filter by audience buckets:
- `all`
- `attending`
- `not_responded`
- `declined`

There was no obvious confirmed handling for `recipient_filter.guestIds` when `audience = custom`.

## Why this matters

Without this, the UI can pretend to support targeted guest sends while the backend still behaves like a broad audience send. That’s bullshit and dangerous.

## Expected backend behavior

When `messages.recipient_filter.audience === 'custom'`:
- read `recipient_filter.guestIds`
- restrict guest query to those IDs
- still apply channel availability rules:
  - SMS requires `phone`
  - email requires `email`
- still scope to `wedding_site_id`
- ignore broad RSVP audience filters unless explicitly combined in a future version

## Recommended patch shape in `send-bulk-message`

Pseudo-logic:

```ts
const audience = message.audience_filter ?? message.recipient_filter?.audience ?? 'all';
const customGuestIds = Array.isArray(message.recipient_filter?.guestIds)
  ? message.recipient_filter.guestIds.filter(Boolean)
  : [];

let guestQuery = adminClient
  .from('guests')
  .select('id, first_name, last_name, name, email, phone, rsvp_status')
  .eq('wedding_site_id', message.wedding_sites.id);

if (channel === 'sms') {
  guestQuery = guestQuery.not('phone', 'is', null);
} else {
  guestQuery = guestQuery.not('email', 'is', null);
}

if (audience === 'custom') {
  if (customGuestIds.length === 0) {
    return error('Custom audience requires at least one guest id');
  }
  guestQuery = guestQuery.in('id', customGuestIds);
} else if (audience === 'attending') {
  guestQuery = guestQuery.eq('rsvp_status', 'confirmed');
} else if (audience === 'not_responded') {
  guestQuery = guestQuery.eq('rsvp_status', 'pending');
} else if (audience === 'declined') {
  guestQuery = guestQuery.eq('rsvp_status', 'declined');
}
```

## Validation rules

- reject `custom` with empty `guestIds`
- dedupe `guestIds`
- do not allow cross-site guest leakage
- do not silently fall back from `custom` to `all`

## QA checks

1. create custom message for 2 specific guests
2. verify only those 2 get delivery rows
3. verify guests without required channel contact are skipped or excluded cleanly
4. verify broad audience sends still behave unchanged
5. verify custom send cannot target another wedding site’s guests

## Recommendation

Do this before exposing full custom targeting in production UI.
