import type {
  CommsTemplateRecord,
  MessageComposerPreview,
  MessageComposerState,
} from './messageComposerTypes';

export type MergeVars = Record<string, string | undefined | null>;

export function applyTemplate(input: string, vars: MergeVars): string {
  return Object.entries(vars).reduce((acc, [key, value]) => {
    const safe = value ?? '';
    return acc.split(key).join(safe);
  }, input);
}

export function applyTemplateRecord(
  template: CommsTemplateRecord,
  vars: MergeVars,
): Pick<MessageComposerState, 'subject' | 'body'> {
  return {
    subject: template.subject ? applyTemplate(template.subject, vars) : '',
    body: applyTemplate(template.body, vars),
  };
}

export function buildComposerPreview(
  state: MessageComposerState,
  vars: MergeVars,
): MessageComposerPreview {
  return {
    channel: state.channel,
    subject: state.channel === 'email' ? applyTemplate(state.subject, vars) : undefined,
    renderedBody: applyTemplate(state.body, vars),
  };
}

export function canSendComposer(state: MessageComposerState): boolean {
  if (!state.body.trim()) return false;
  if (state.channel === 'email' && !state.subject.trim()) return false;
  if (state.audience === 'custom' && state.guestIds.length === 0) return false;
  return true;
}
