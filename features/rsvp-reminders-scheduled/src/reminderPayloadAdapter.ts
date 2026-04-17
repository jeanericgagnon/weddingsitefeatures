import type { ScheduledReminderDraft } from '../contracts/reminder-contracts';

export interface ReminderMessageInsertShape {
  wedding_site_id: string;
  channel: 'sms' | 'email';
  audience_filter: 'not_responded';
  recipient_filter: { audience: 'not_responded' };
  subject: string | null;
  body: string;
  status: 'queued' | 'scheduled';
  scheduled_for: string | null;
  delivered_count: number;
  failed_count: number;
  recipient_count: number;
  category: 'rsvp_reminder';
}

export function buildReminderMessageInsert(draft: ScheduledReminderDraft): ReminderMessageInsertShape {
  return {
    wedding_site_id: draft.weddingSiteId,
    channel: draft.channel,
    audience_filter: 'not_responded',
    recipient_filter: { audience: 'not_responded' },
    subject: draft.channel === 'email' ? (draft.subject ?? '') : null,
    body: draft.body,
    status: draft.sendNow ? 'queued' : 'scheduled',
    scheduled_for: draft.sendNow ? null : (draft.sendAt ?? null),
    delivered_count: 0,
    failed_count: 0,
    recipient_count: 0,
    category: 'rsvp_reminder',
  };
}
