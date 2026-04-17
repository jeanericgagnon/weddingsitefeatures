import type { ScheduledReminderDraft } from '../contracts/reminder-contracts';

export const sampleScheduledReminderDraft: ScheduledReminderDraft = {
  weddingSiteId: 'site_123',
  channel: 'sms',
  audience: 'not_responded',
  templateId: 'sms-reminder-1',
  body: 'Hi {{guestFirstName}} — quick reminder to RSVP by {{deadline}}: {{rsvpLink}}',
  subject: null,
  sendAt: '2026-05-01T18:00:00.000Z',
  sendNow: false,
};
