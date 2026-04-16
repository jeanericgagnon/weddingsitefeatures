-- Proposal: inbound SMS review resolution audit
-- Feature repo only. Do not apply blindly.

create table if not exists sms_inbound_review_resolutions (
  id uuid primary key default gen_random_uuid(),
  inbound_event_id uuid not null,
  resolution text not null,
  resolved_guest_id uuid,
  notes text,
  resolved_by uuid,
  created_at timestamptz not null default now()
);

create index if not exists idx_sms_inbound_review_resolutions_event
  on sms_inbound_review_resolutions (inbound_event_id);

comment on table sms_inbound_review_resolutions is
  'Proposed audit trail for how unmatched/ambiguous inbound SMS events get resolved.';
