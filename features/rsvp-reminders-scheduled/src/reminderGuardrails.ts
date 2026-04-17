import type { ReminderSendGuardrailResult } from '../contracts/reminder-contracts';

export interface ReminderGuardrailInput {
  recentReminderCount: number;
  smsAvailable: boolean;
  channel: 'sms' | 'email';
}

export function evaluateReminderGuardrails(input: ReminderGuardrailInput): ReminderSendGuardrailResult {
  if (input.channel === 'sms' && !input.smsAvailable) {
    return {
      allowed: false,
      reason: 'SMS sending is not currently available.',
      recentlyRemindedGuestCount: input.recentReminderCount,
    };
  }

  if (input.recentReminderCount > 0) {
    return {
      allowed: true,
      reason: `${input.recentReminderCount} guests were reminded recently.`,
      recentlyRemindedGuestCount: input.recentReminderCount,
    };
  }

  return {
    allowed: true,
    reason: null,
    recentlyRemindedGuestCount: 0,
  };
}
