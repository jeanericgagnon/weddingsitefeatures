import { strict as assert } from 'node:assert';
import { evaluateReminderGuardrails } from './reminderGuardrails.ts';

const blocked = evaluateReminderGuardrails({
  recentReminderCount: 0,
  smsAvailable: false,
  channel: 'sms',
});
assert.equal(blocked.allowed, false);

const warned = evaluateReminderGuardrails({
  recentReminderCount: 4,
  smsAvailable: true,
  channel: 'sms',
});
assert.equal(warned.allowed, true);
assert.equal(warned.recentlyRemindedGuestCount, 4);

console.log('reminderGuardrails tests passed');
