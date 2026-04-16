-- Proposal: contact capture request lifecycle storage
-- Feature repo only. Do not apply blindly.

create table if not exists guest_contact_capture_requests (
  id uuid primary key default gen_random_uuid(),
  wedding_site_id uuid not null,
  guest_id uuid not null,
  token_hash text not null,
  requested_channel text not null default 'either',
  status text not null default 'pending',
  expires_at timestamptz not null,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_guest_contact_capture_requests_guest
  on guest_contact_capture_requests (guest_id);

create index if not exists idx_guest_contact_capture_requests_site
  on guest_contact_capture_requests (wedding_site_id);

comment on table guest_contact_capture_requests is
  'Proposed lifecycle store for secure guest contact capture requests.';
