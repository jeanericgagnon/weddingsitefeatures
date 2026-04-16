export interface MessagesTableRow {
  id: string;
  wedding_site_id: string;
  channel: 'sms' | 'email';
  audience_filter: 'all' | 'attending' | 'not_responded' | 'declined' | 'custom';
  recipient_filter?: {
    audience?: string;
    guestIds?: string[];
  } | null;
  subject?: string | null;
  body: string;
  status: 'draft' | 'queued' | 'scheduled' | 'sending' | 'sent' | 'partial' | 'failed';
  scheduled_for?: string | null;
  sent_at?: string | null;
  delivered_count?: number | null;
  failed_count?: number | null;
  recipient_count?: number | null;
}

export interface MessageDeliveriesTableRow {
  id: string;
  message_id: string;
  guest_id: string;
  recipient_email?: string | null;
  recipient_name?: string | null;
  status: 'sent' | 'failed' | 'delivered' | 'unknown';
  error_message?: string | null;
  provider_message_id?: string | null;
  attempted_at?: string | null;
  delivered_at?: string | null;
}

export interface SmsInboundRsvpEventsTableRow {
  id: string;
  wedding_site_id?: string | null;
  guest_id?: string | null;
  from_number: string;
  to_number?: string | null;
  message_sid?: string | null;
  raw_body: string;
  normalized_body?: string | null;
  interpreted_status?: 'confirmed' | 'declined' | 'pending' | null;
  process_result: 'updated' | 'needs_clarification' | 'unmatched' | 'ignored' | 'failed';
  process_error?: string | null;
  created_at?: string | null;
}

export interface ContactCaptureRequestsTableRow {
  id: string;
  wedding_site_id: string;
  guest_id: string;
  token_hash: string;
  expires_at: string;
  requested_channel: 'sms' | 'email' | 'either';
  status: 'pending' | 'completed' | 'expired' | 'revoked';
  created_at?: string | null;
  completed_at?: string | null;
}
