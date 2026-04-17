import type { ScheduledReminderDraft } from '../contracts/reminder-contracts';
import { countReachablePendingGuests, getPendingGuests, type PendingGuestCandidate } from './reminderAudienceUtils.ts';
import { evaluateReminderGuardrails } from './reminderGuardrails.ts';
import { filterRecentlyRemindedGuests } from './reminderRecentFilter.ts';
import { buildReminderMessageInsert } from './reminderPayloadAdapter.ts';
import { dedupeReminderGuestIds } from './reminderDedupeUtils.ts';

export interface ReminderOrchestratorInput {
  candidates: PendingGuestCandidate[];
  draft: ScheduledReminderDraft;
  cooldownHours: number;
  smsAvailable: boolean;
}

export interface ReminderOrchestratorResult {
  reachableGuestCount: number;
  pendingGuestIds: string[];
  messageInsert: ReturnType<typeof buildReminderMessageInsert>;
  guardrail: ReturnType<typeof evaluateReminderGuardrails>;
}

export function buildReminderCampaignPlan(input: ReminderOrchestratorInput): ReminderOrchestratorResult {
  const pending = getPendingGuests(input.candidates);
  const cooled = filterRecentlyRemindedGuests(pending, input.cooldownHours);
  const reachableGuestCount = countReachablePendingGuests(cooled, input.draft.channel);
  const pendingGuestIds = dedupeReminderGuestIds(
    cooled.map((guest) => guest.guestId),
    input.draft,
  );

  const recentReminderCount = Math.max(pending.length - cooled.length, 0);
  const guardrail = evaluateReminderGuardrails({
    recentReminderCount,
    smsAvailable: input.smsAvailable,
    channel: input.draft.channel,
  });

  return {
    reachableGuestCount,
    pendingGuestIds,
    messageInsert: buildReminderMessageInsert(input.draft),
    guardrail,
  };
}
