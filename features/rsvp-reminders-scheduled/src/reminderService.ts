import type { ScheduledReminderDraft } from '../contracts/reminder-contracts';
import { getPendingGuests, type PendingGuestCandidate } from './reminderAudienceUtils.ts';
import { filterRecentlyRemindedGuests } from './reminderRecentFilter.ts';
import { evaluateReminderGuardrails } from './reminderGuardrails.ts';
import { buildReminderMessageInsert } from './reminderPayloadAdapter.ts';
import { buildReminderCampaignSummary } from './reminderCampaignSummary.ts';

export interface ReminderServiceInput {
  candidates: PendingGuestCandidate[];
  draft: ScheduledReminderDraft;
  cooldownHours: number;
  smsAvailable: boolean;
}

export function prepareReminderServicePayload(input: ReminderServiceInput) {
  const pendingGuests = getPendingGuests(input.candidates);
  const cooledGuests = filterRecentlyRemindedGuests(pendingGuests, input.cooldownHours);
  const reachableGuests = cooledGuests.filter((guest) => (
    input.draft.channel === 'sms' ? !!guest.hasPhone : !!guest.hasEmail
  ));

  const guardrail = evaluateReminderGuardrails({
    recentReminderCount: Math.max(pendingGuests.length - cooledGuests.length, 0),
    smsAvailable: input.smsAvailable,
    channel: input.draft.channel,
  });

  const summary = buildReminderCampaignSummary(pendingGuests, reachableGuests, cooledGuests);
  const messageInsert = buildReminderMessageInsert(input.draft);

  return {
    summary,
    guardrail,
    messageInsert,
    reachableGuestIds: reachableGuests.map((guest) => guest.guestId),
  };
}
