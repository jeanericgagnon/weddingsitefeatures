export interface PendingGuestCandidate {
  guestId: string;
  guestName: string;
  rsvpStatus: string | null;
  lastRemindedAt?: string | null;
  hasPhone?: boolean;
  hasEmail?: boolean;
}

export function getPendingGuests(candidates: PendingGuestCandidate[]): PendingGuestCandidate[] {
  return candidates.filter((guest) => guest.rsvpStatus == null || guest.rsvpStatus === 'pending');
}

export function countReachablePendingGuests(
  candidates: PendingGuestCandidate[],
  channel: 'sms' | 'email',
): number {
  return getPendingGuests(candidates).filter((guest) => (
    channel === 'sms' ? !!guest.hasPhone : !!guest.hasEmail
  )).length;
}
