import { strict as assert } from 'node:assert';
import { prepareReminderServicePayload } from './reminderService.ts';
import { sampleScheduledReminderDraft } from './reminderFixtures.ts';

const now = Date.now();
const result = prepareReminderServicePayload({
  candidates: [
    { guestId: 'g1', guestName: 'A', rsvpStatus: 'pending', hasPhone: true, hasEmail: true, lastRemindedAt: null },
    { guestId: 'g2', guestName: 'B', rsvpStatus: 'pending', hasPhone: false, hasEmail: true, lastRemindedAt: new Date(now - 2 * 60 * 60 * 1000).toISOString() },
    { guestId: 'g3', guestName: 'C', rsvpStatus: 'confirmed', hasPhone: true, hasEmail: true, lastRemindedAt: null },
  ],
  draft: sampleScheduledReminderDraft,
  cooldownHours: 24,
  smsAvailable: true,
});

assert.equal(result.summary.pendingGuests, 2);
assert.equal(result.summary.reachableGuests, 1);
assert.equal(result.summary.skippedRecentlyReminded, 1);
assert.equal(result.reachableGuestIds.length, 1);
assert.equal(result.messageInsert.category, 'rsvp_reminder');

console.log('reminderService tests passed');
