import type {
  ReminderAutomationCandidate,
  ReminderAutomationRule,
} from './reminderAutomationTypes';

export function isCandidateReachable(
  candidate: ReminderAutomationCandidate,
  channel: ReminderAutomationRule['channel'],
): boolean {
  return channel === 'sms' ? !!candidate.hasPhone : !!candidate.hasEmail;
}

export function hoursSince(iso?: string | null): number | null {
  if (!iso) return null;
  const ts = new Date(iso).getTime();
  if (Number.isNaN(ts)) return null;
  return (Date.now() - ts) / (1000 * 60 * 60);
}

export function passesCooldown(
  candidate: ReminderAutomationCandidate,
  rule: ReminderAutomationRule,
): boolean {
  if (!rule.cooldownHours) return true;
  const elapsed = hoursSince(candidate.lastReminderSentAt);
  if (elapsed === null) return true;
  return elapsed >= rule.cooldownHours;
}

export function matchesAudience(
  candidate: ReminderAutomationCandidate,
  audience: ReminderAutomationRule['audience'],
): boolean {
  if (audience === 'not_responded') return candidate.rsvpStatus === 'pending' || candidate.rsvpStatus == null;
  if (audience === 'attending') return candidate.rsvpStatus === 'confirmed';
  if (audience === 'declined') return candidate.rsvpStatus === 'declined';
  return false;
}

export function filterReminderCandidates(
  candidates: ReminderAutomationCandidate[],
  rule: ReminderAutomationRule,
): ReminderAutomationCandidate[] {
  return candidates.filter((candidate) => (
    isCandidateReachable(candidate, rule.channel)
    && passesCooldown(candidate, rule)
    && matchesAudience(candidate, rule.audience)
  ));
}
