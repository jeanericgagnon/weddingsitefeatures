import type { ReminderPreset } from './reminderSchedulerTypes';

export function buildScheduledSendAtFromDeadline(deadlineIso: string, offsetDays: number): string {
  const deadline = new Date(deadlineIso);
  const sendAt = new Date(deadline.getTime() - offsetDays * 24 * 60 * 60 * 1000);
  return sendAt.toISOString();
}

export function getReminderPresetOptions(deadlineIso: string): Array<ReminderPreset & { sendAt: string }> {
  const base: ReminderPreset[] = [
    { id: 'p7', label: '7 days before RSVP deadline', offsetDays: 7 },
    { id: 'p3', label: '3 days before RSVP deadline', offsetDays: 3 },
    { id: 'p1', label: '1 day before RSVP deadline', offsetDays: 1 },
  ];

  return base.map((preset) => ({
    ...preset,
    sendAt: buildScheduledSendAtFromDeadline(deadlineIso, preset.offsetDays),
  }));
}
