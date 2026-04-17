import type { ScheduledReminderDraft } from '../contracts/reminder-contracts';

export function buildReminderDedupeKey(
  guestId: string,
  draft: Pick<ScheduledReminderDraft, 'channel' | 'templateId' | 'sendAt'>,
): string {
  return [guestId, draft.channel, draft.templateId, draft.sendAt || 'now'].join('::');
}

export function dedupeReminderGuestIds(
  guestIds: string[],
  draft: Pick<ScheduledReminderDraft, 'channel' | 'templateId' | 'sendAt'>,
): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const guestId of guestIds) {
    const key = buildReminderDedupeKey(guestId, draft);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(guestId);
  }

  return result;
}
