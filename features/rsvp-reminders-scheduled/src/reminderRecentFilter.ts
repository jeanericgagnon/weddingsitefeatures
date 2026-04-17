import type { PendingGuestCandidate } from './reminderAudienceUtils';

export function filterRecentlyRemindedGuests(
  candidates: PendingGuestCandidate[],
  cooldownHours: number,
): PendingGuestCandidate[] {
  return candidates.filter((guest) => {
    if (!guest.lastRemindedAt) return true;
    const ts = new Date(guest.lastRemindedAt).getTime();
    if (Number.isNaN(ts)) return true;
    const hoursElapsed = (Date.now() - ts) / (1000 * 60 * 60);
    return hoursElapsed >= cooldownHours;
  });
}
