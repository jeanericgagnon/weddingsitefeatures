# Patch brief — `send-bulk-message` custom audience support

## Goal

Enable safe support for targeted guest sends from the new comms composer.

## File
- `supabase/functions/send-bulk-message/index.ts`

## Required changes

1. Read `message.recipient_filter.guestIds`
2. If `audience === 'custom'`, require non-empty guest ID list
3. Restrict guest query with `.in('id', guestIds)`
4. Keep `wedding_site_id` scope enforcement in place
5. Do not silently widen custom sends into full-audience sends

## Why

The feature repo now includes a composer + adapter that can generate custom audience payloads. The backend needs to honor them or the UI will lie.

## Rollout note

Hide `custom` audience in the main app until this patch is live.
