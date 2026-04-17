import { strict as assert } from 'node:assert';
import { buildScheduledSendAtFromDeadline, getReminderPresetOptions } from './reminderScheduleUtils.ts';

const deadline = '2026-05-10T18:00:00.000Z';
const sendAt = buildScheduledSendAtFromDeadline(deadline, 3);
assert.equal(sendAt, '2026-05-07T18:00:00.000Z');
assert.equal(getReminderPresetOptions(deadline).length, 3);

console.log('reminderScheduleUtils tests passed');
