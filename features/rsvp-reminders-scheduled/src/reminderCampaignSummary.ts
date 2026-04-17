import type { PendingGuestCandidate } from './reminderAudienceUtils';

export interface ReminderCampaignSummary {
  pendingGuests: number;
  reachableGuests: number;
  skippedRecentlyReminded: number;
  skippedUnreachable: number;
}

export function buildReminderCampaignSummary(
  pendingGuests: PendingGuestCandidate[],
  reachableGuests: PendingGuestCandidate[],
  cooledGuests: PendingGuestCandidate[],
): ReminderCampaignSummary {
  return {
    pendingGuests: pendingGuests.length,
    reachableGuests: reachableGuests.length,
    skippedRecentlyReminded: Math.max(pendingGuests.length - cooledGuests.length, 0),
    skippedUnreachable: Math.max(cooledGuests.length - reachableGuests.length, 0),
  };
}
