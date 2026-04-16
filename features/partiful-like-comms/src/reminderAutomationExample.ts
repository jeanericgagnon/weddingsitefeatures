import type { ReminderAutomationCandidate, ReminderAutomationRule } from './reminderAutomationTypes';
import { filterReminderCandidates } from './reminderAutomationUtils';

export const sampleReminderRule: ReminderAutomationRule = {
  id: 'rule_1',
  name: 'Pending RSVP SMS reminder',
  channel: 'sms',
  audience: 'not_responded',
  trigger: 'before_rsvp_deadline',
  offsetDays: 5,
  enabled: true,
  templateId: 'sms-reminder-1',
  cooldownHours: 48,
};

export const sampleReminderCandidates: ReminderAutomationCandidate[] = [
  {
    guestId: 'g1',
    guestName: 'Taylor Smith',
    rsvpStatus: 'pending',
    lastInviteSentAt: '2026-04-10T15:00:00.000Z',
    lastReminderSentAt: null,
    hasPhone: true,
  },
  {
    guestId: 'g2',
    guestName: 'Jordan Lee',
    rsvpStatus: 'confirmed',
    hasPhone: true,
  },
  {
    guestId: 'g3',
    guestName: 'Morgan Diaz',
    rsvpStatus: 'pending',
    lastReminderSentAt: new Date().toISOString(),
    hasPhone: true,
  },
];

export const sampleEligibleReminderCandidates = filterReminderCandidates(
  sampleReminderCandidates,
  sampleReminderRule,
);
