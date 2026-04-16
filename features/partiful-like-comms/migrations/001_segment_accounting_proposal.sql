-- Proposal: segment-aware SMS accounting support
-- Feature repo only. Do not apply blindly.

-- Goal:
-- move SMS usage accounting from recipient-count semantics toward segment-aware semantics.

alter table if exists sms_credit_transactions
  add column if not exists segment_count integer,
  add column if not exists billing_unit text,
  add column if not exists message_id uuid,
  add column if not exists metadata jsonb default '{}'::jsonb;

comment on column sms_credit_transactions.segment_count is
  'Proposed: number of SMS segments consumed or purchased in this transaction when billing by segment.';

comment on column sms_credit_transactions.billing_unit is
  'Proposed: billing unit, expected values like segment or legacy_credit during migration.';

comment on column sms_credit_transactions.message_id is
  'Proposed: optional link back to messages.id for usage transactions.';
