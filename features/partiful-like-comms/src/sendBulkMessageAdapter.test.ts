import { strict as assert } from 'node:assert';
import {
  buildMessageRecordInsert,
  deriveMessageStatus,
  normalizeAudience,
} from './sendBulkMessageAdapter.ts';

const futureIso = new Date(Date.now() + 60_000).toISOString();

assert.equal(normalizeAudience('all'), 'all');
assert.equal(normalizeAudience('custom'), 'custom');
assert.equal(deriveMessageStatus(undefined), 'queued');
assert.equal(deriveMessageStatus(futureIso), 'scheduled');

const smsPayload = buildMessageRecordInsert({
  weddingSiteId: 'site_123',
  channel: 'sms',
  audience: 'not_responded',
  body: 'Reminder body',
});
assert.equal(smsPayload.subject, null);
assert.equal(smsPayload.status, 'queued');
assert.equal(smsPayload.audience_filter, 'not_responded');

const customPayload = buildMessageRecordInsert({
  weddingSiteId: 'site_123',
  channel: 'email',
  audience: 'custom',
  subject: 'Subject',
  body: 'Hello',
  guestIds: ['g1', 'g2'],
  scheduledFor: futureIso,
});
assert.equal(customPayload.status, 'scheduled');
assert.deepEqual(customPayload.recipient_filter, {
  audience: 'custom',
  guestIds: ['g1', 'g2'],
});

console.log('sendBulkMessageAdapter tests passed');
