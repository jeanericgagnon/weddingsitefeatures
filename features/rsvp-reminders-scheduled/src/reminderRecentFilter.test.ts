import { strict as assert } from 'node:assert';
import { filterRecentlyRemindedGuests } from './reminderRecentFilter.ts';

const now = Date.now();
const guests = [
  { guestId: 'g1', guestName: 'A', rsvpStatus: 'pending', lastRemindedAt: new Date(now - 72 * 60 * 60 * 1000).toISOString() },
  { guestId: 'g2', guestName: 'B', rsvpStatus: 'pending', lastRemindedAt: new Date(now - 2 * 60 * 60 * 1000).toISOString() },
  { guestId: 'g3', guestName: 'C', rsvpStatus: 'pending', lastRemindedAt: null },
];

assert.equal(filterRecentlyRemindedGuests(guests, 24).length, 2);
console.log('reminderRecentFilter tests passed');
