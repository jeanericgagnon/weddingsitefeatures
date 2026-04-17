import type { ReminderHistoryEntry } from './reminderHistoryTypes';

export function getRecentReminderHistory(
  history: ReminderHistoryEntry[],
  guestId: string,
  channel?: 'sms' | 'email',
): ReminderHistoryEntry[] {
  return history
    .filter((entry) => entry.guestId === guestId && (!channel || entry.channel === channel))
    .sort((a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime());
}

export function getLastReminderSentAt(
  history: ReminderHistoryEntry[],
  guestId: string,
  channel?: 'sms' | 'email',
): string | null {
  const recent = getRecentReminderHistory(history, guestId, channel)[0];
  return recent?.sentAt ?? null;
}
