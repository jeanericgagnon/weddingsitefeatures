export type GuestCommsTimelineEventType =
  | 'invite_sent'
  | 'reminder_sent'
  | 'message_sent'
  | 'message_failed'
  | 'rsvp_updated'
  | 'sms_inbound'
  | 'contact_requested'
  | 'contact_completed';

export interface GuestCommsTimelineEvent {
  id: string;
  type: GuestCommsTimelineEventType;
  title: string;
  description?: string;
  channel?: 'sms' | 'email';
  timestamp: string;
  status?: 'info' | 'success' | 'warning' | 'error';
}

export interface GuestCommsTimelineProps {
  guestName: string;
  guestId: string;
  events: GuestCommsTimelineEvent[];
}
