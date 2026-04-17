export interface ReminderSchedulerState {
  channel: 'sms' | 'email';
  templateId: string;
  subject: string;
  body: string;
  sendMode: 'now' | 'scheduled';
  sendAt: string;
  guestCount: number;
  audience: 'not_responded';
}

export interface ReminderPreset {
  id: string;
  label: string;
  offsetDays: number;
}
