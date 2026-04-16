export type CommsChannel = 'sms' | 'email';

export type CommsAudience =
  | 'all'
  | 'attending'
  | 'not_responded'
  | 'declined'
  | 'custom';

export type RsvpReplyIntent = 'confirmed' | 'declined' | 'pending' | 'unknown';

export type MessageLifecycleStatus =
  | 'draft'
  | 'queued'
  | 'scheduled'
  | 'sending'
  | 'sent'
  | 'partial_failure'
  | 'failed'
  | 'cancelled';

export interface GuestCommsProfile {
  guestId: string;
  weddingSiteId: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  rsvpStatus?: string | null;
  smsConsent?: boolean | null;
  lastInviteSentAt?: string | null;
  lastReminderSentAt?: string | null;
  lastInboundMessageAt?: string | null;
}

export interface CommsTemplate {
  id: string;
  weddingSiteId: string;
  name: string;
  channel: CommsChannel;
  category: 'invite' | 'reminder' | 'announcement' | 'follow_up';
  subject?: string | null;
  body: string;
  replyMode?: 'free_text' | 'rsvp_yes_no' | 'link_only';
}

export interface MessageCampaignDraft {
  id: string;
  weddingSiteId: string;
  channel: CommsChannel;
  audience: CommsAudience;
  guestIds?: string[];
  templateId?: string | null;
  subject?: string | null;
  body: string;
  scheduledFor?: string | null;
  status: MessageLifecycleStatus;
}

export interface MessageDeliveryEvent {
  id: string;
  messageId: string;
  guestId: string;
  channel: CommsChannel;
  destination: string;
  providerMessageId?: string | null;
  deliveryState: 'queued' | 'sent' | 'delivered' | 'failed' | 'unknown';
  failureReason?: string | null;
  createdAt: string;
}

export interface InboundGuestReply {
  id: string;
  weddingSiteId?: string | null;
  guestId?: string | null;
  channel: 'sms';
  from: string;
  to?: string | null;
  rawBody: string;
  normalizedBody?: string | null;
  intent: RsvpReplyIntent;
  processResult: 'updated' | 'needs_clarification' | 'unmatched' | 'ignored' | 'failed';
  receivedAt: string;
}

export interface ReminderAutomationRule {
  id: string;
  weddingSiteId: string;
  channel: CommsChannel;
  audience: Extract<CommsAudience, 'not_responded' | 'attending' | 'declined'>;
  trigger: 'before_rsvp_deadline' | 'after_invite' | 'manual_recommended';
  offsetDays?: number;
  templateId: string;
  enabled: boolean;
}
