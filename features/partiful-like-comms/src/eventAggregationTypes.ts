export interface AggregatedGuestCommsEvent {
  id: string;
  guestId: string;
  guestName?: string | null;
  source: 'message' | 'delivery' | 'inbound_sms' | 'rsvp' | 'contact_capture';
  type: string;
  timestamp: string;
  title: string;
  description?: string | null;
  channel?: 'sms' | 'email';
  status?: 'info' | 'success' | 'warning' | 'error';
}
