export interface ReminderTemplate {
  id: string;
  name: string;
  channel: 'sms' | 'email';
  body: string;
  subject?: string | null;
}

export interface ReminderAudienceSummary {
  audience: 'not_responded';
  guestCount: number;
}

export interface ScheduledReminderDraft {
  weddingSiteId: string;
  channel: 'sms' | 'email';
  audience: 'not_responded';
  templateId: string;
  body: string;
  subject?: string | null;
  sendAt?: string | null;
  sendNow: boolean;
}

export interface ReminderSendGuardrailResult {
  allowed: boolean;
  reason?: string | null;
  recentlyRemindedGuestCount?: number;
}
