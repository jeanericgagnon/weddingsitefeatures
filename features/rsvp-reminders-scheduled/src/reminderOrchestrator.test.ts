import { strict as assert } from 'node:assert';
import { buildReminderCampaignPlan } from './reminderOrchestrator.ts';
import { sampleScheduledReminderDraft } from './reminderFixtures.ts';

const now = Date.now();
const result = buildReminderCampaignPlan({
  candidates: [
    { guestId: 'g1', guestName: 'A', rsvpStatus: 'pending', hasPhone: true, lastRemindedAt: null },
    { guestId: 'g2', guestName: 'B', rsvpStatus: 'pending', hasPhone: true, lastRemindedAt: new Date(now - 2 * 60 * 60 * 1000).toISOString() },
    { guestId: 'g3', guestName: 'C', rsvpStatus: 'confirmed', hasPhone: true, lastRemindedAt: null },
  ],
  draft: sampleScheduledReminderDraft,
  cooldownHours: 24,
  smsAvailable: true,
});

assert.equal(result.reachableGuestCount, 1);
assert.equal(result.pendingGuestIds.length, 1);
assert.equal(result.guardrail.allowed, true);
assert.equal(result.guardrail.recentlyRemindedGuestCount, 1);
assert.equal(result.messageInsert.category, 'rsvp_reminder');

console.log('reminderOrchestrator tests passed');
