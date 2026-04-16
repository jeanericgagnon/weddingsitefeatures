export type CommsChannel = 'sms' | 'email';

export type CommsAudience =
  | 'all'
  | 'attending'
  | 'not_responded'
  | 'declined'
  | 'custom';

export type TemplateCategory = 'invite' | 'reminder' | 'announcement' | 'follow_up';

export interface TemplateVariableOption {
  key: string;
  label: string;
  example: string;
}

export interface CommsTemplateRecord {
  id: string;
  name: string;
  channel: CommsChannel;
  category: TemplateCategory;
  subject?: string | null;
  body: string;
}

export interface MessageComposerState {
  channel: CommsChannel;
  audience: CommsAudience;
  templateId?: string;
  subject: string;
  body: string;
  scheduledFor?: string;
  guestIds: string[];
}

export interface MessageComposerPreview {
  channel: CommsChannel;
  subject?: string;
  renderedBody: string;
}
