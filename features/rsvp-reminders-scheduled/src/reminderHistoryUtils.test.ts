import { strict as assert } from 'node:assert';
import { getLastReminderSentAt, getRecentReminderHistory } from './reminderHistoryUtils.ts';

const history = [
  { id: 'h1', guestId: 'g1', channel: 'sms', sentAt: '2026-05-01T10:00:00.000Z', status: 'sent' as const },
  { id: 'h2', guestId: 'g1', channel: 'sms', sentAt: '2026-05-03T10:00:00.000Z', status: 'sent' as const },
  { id: 'h3', guestId: 'g2', channel: 'email', sentAt: '2026-05-02T10:00:00.000Z', status: 'sent' as const },
];

assert.equal(getRecentReminderHistory(history, 'g1', 'sms').length, 2);
assert.equal(getLastReminderSentAt(history, 'g1', 'sms'), '2026-05-03T10:00:00.000Z');

console.log('reminderHistoryUtils tests passed');
