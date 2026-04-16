export type ReminderTrigger = 'before_rsvp_deadline' | 'after_invite' | 'manual_recommended';

export interface ReminderAutomationRule {
  id: string;
  name: string;
  channel: 'sms' | 'email';
  audience: 'not_responded' | 'attending' | 'declined';
  trigger: ReminderTrigger;
  offsetDays?: number;
  enabled: boolean;
  templateId: string;
  cooldownHours?: number;
}

export interface ReminderAutomationCandidate {
  guestId: string;
  guestName: string;
  rsvpStatus: string | null;
  lastInviteSentAt?: string | null;
  lastReminderSentAt?: string | null;
  hasPhone?: boolean;
  hasEmail?: boolean;
}
