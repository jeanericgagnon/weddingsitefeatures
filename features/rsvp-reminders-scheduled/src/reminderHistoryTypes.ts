export interface ReminderHistoryEntry {
  id: string;
  guestId: string;
  messageId?: string | null;
  channel: 'sms' | 'email';
  sentAt: string;
  status: 'queued' | 'scheduled' | 'sent' | 'failed';
  templateId?: string | null;
}
