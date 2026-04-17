import { strict as assert } from 'node:assert';
import { buildReminderDedupeKey, dedupeReminderGuestIds } from './reminderDedupeUtils.ts';

const draft = { channel: 'sms' as const, templateId: 'sms-reminder-1', sendAt: '2026-05-01T18:00:00.000Z' };
assert.equal(buildReminderDedupeKey('g1', draft), 'g1::sms::sms-reminder-1::2026-05-01T18:00:00.000Z');
assert.deepEqual(dedupeReminderGuestIds(['g1', 'g1', 'g2'], draft), ['g1', 'g2']);

console.log('reminderDedupeUtils tests passed');
