import { strict as assert } from 'node:assert';
import { countReachablePendingGuests, getPendingGuests } from './reminderAudienceUtils.ts';

const candidates = [
  { guestId: 'g1', guestName: 'A', rsvpStatus: 'pending', hasPhone: true, hasEmail: true },
  { guestId: 'g2', guestName: 'B', rsvpStatus: 'confirmed', hasPhone: true, hasEmail: true },
  { guestId: 'g3', guestName: 'C', rsvpStatus: null, hasPhone: false, hasEmail: true },
];

assert.equal(getPendingGuests(candidates).length, 2);
assert.equal(countReachablePendingGuests(candidates, 'sms'), 1);
assert.equal(countReachablePendingGuests(candidates, 'email'), 2);

console.log('reminderAudienceUtils tests passed');
