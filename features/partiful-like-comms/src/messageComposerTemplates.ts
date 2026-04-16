import type { CommsTemplateRecord, TemplateVariableOption } from './messageComposerTypes';

export const templateVariables: TemplateVariableOption[] = [
  { key: '{{guestFirstName}}', label: 'Guest first name', example: 'Taylor' },
  { key: '{{coupleNames}}', label: 'Couple names', example: 'Sam & Jordan' },
  { key: '{{eventDate}}', label: 'Event date', example: 'June 14, 2026' },
  { key: '{{venueName}}', label: 'Venue name', example: 'Villa Amara' },
  { key: '{{rsvpLink}}', label: 'RSVP link', example: 'https://dayof.love/rsvp/abc123' },
  { key: '{{deadline}}', label: 'RSVP deadline', example: 'May 20' },
];

export const starterTemplates: CommsTemplateRecord[] = [
  {
    id: 'sms-invite-1',
    name: 'SMS Invite',
    channel: 'sms',
    category: 'invite',
    body: 'Hi {{guestFirstName}} — you’re invited to celebrate {{coupleNames}} on {{eventDate}} at {{venueName}}. RSVP here: {{rsvpLink}}',
  },
  {
    id: 'sms-reminder-1',
    name: 'SMS RSVP Reminder',
    channel: 'sms',
    category: 'reminder',
    body: 'Hi {{guestFirstName}} — quick reminder to RSVP for {{coupleNames}} by {{deadline}}: {{rsvpLink}}',
  },
  {
    id: 'email-invite-1',
    name: 'Email Invite',
    channel: 'email',
    category: 'invite',
    subject: 'You’re invited to celebrate {{coupleNames}}',
    body: 'Hi {{guestFirstName}},\n\nWe’d love to celebrate with you on {{eventDate}} at {{venueName}}.\n\nPlease RSVP here: {{rsvpLink}}\n\nLove,\n{{coupleNames}}',
  },
  {
    id: 'email-reminder-1',
    name: 'Email RSVP Reminder',
    channel: 'email',
    category: 'reminder',
    subject: 'Friendly RSVP reminder for {{coupleNames}}',
    body: 'Hi {{guestFirstName}},\n\nJust a quick reminder to RSVP by {{deadline}}.\n\nRSVP here: {{rsvpLink}}\n\nThank you,\n{{coupleNames}}',
  },
];
