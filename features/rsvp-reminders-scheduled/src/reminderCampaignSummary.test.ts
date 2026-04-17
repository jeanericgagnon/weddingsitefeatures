import { strict as assert } from 'node:assert';
import { buildReminderCampaignSummary } from './reminderCampaignSummary.ts';

const pending = [
  { guestId: 'g1', guestName: 'A', rsvpStatus: 'pending' },
  { guestId: 'g2', guestName: 'B', rsvpStatus: 'pending' },
  { guestId: 'g3', guestName: 'C', rsvpStatus: 'pending' },
];
const cooled = pending.slice(0, 2);
const reachable = cooled.slice(0, 1);

const summary = buildReminderCampaignSummary(pending as any, reachable as any, cooled as any);
assert.equal(summary.pendingGuests, 3);
assert.equal(summary.reachableGuests, 1);
assert.equal(summary.skippedRecentlyReminded, 1);
assert.equal(summary.skippedUnreachable, 1);

console.log('reminderCampaignSummary tests passed');
