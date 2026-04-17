import { strict as assert } from 'node:assert';
import { buildReminderMessageInsert } from './reminderPayloadAdapter.ts';
import { sampleScheduledReminderDraft } from './reminderFixtures.ts';

const scheduled = buildReminderMessageInsert(sampleScheduledReminderDraft);
assert.equal(scheduled.status, 'scheduled');
assert.equal(scheduled.audience_filter, 'not_responded');
assert.equal(scheduled.category, 'rsvp_reminder');

const immediate = buildReminderMessageInsert({
  ...sampleScheduledReminderDraft,
  sendNow: true,
});
assert.equal(immediate.status, 'queued');
assert.equal(immediate.scheduled_for, null);

console.log('reminderPayloadAdapter tests passed');
