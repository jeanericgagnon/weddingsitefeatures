import type { CommsAudience, CommsChannel, MessageComposerState } from './messageComposerTypes';

export interface CreateMessageRecordInput {
  weddingSiteId: string;
  channel: CommsChannel;
  audience: CommsAudience;
  subject?: string | null;
  body: string;
  scheduledFor?: string | null;
  guestIds?: string[];
  createdByUserId?: string | null;
}

export interface MessageRecordInsertShape {
  wedding_site_id: string;
  channel: CommsChannel;
  audience_filter: Exclude<CommsAudience, 'custom'> | 'custom';
  recipient_filter: {
    audience: CommsAudience;
    guestIds?: string[];
  };
  subject: string | null;
  body: string;
  status: 'queued' | 'scheduled';
  scheduled_for: string | null;
  delivered_count: number;
  failed_count: number;
  recipient_count: number;
  created_by?: string | null;
}

export interface SendBulkMessageInvokePayload {
  messageId: string;
}

export function normalizeAudience(audience: CommsAudience): MessageRecordInsertShape['audience_filter'] {
  if (audience === 'custom') return 'custom';
  return audience;
}

export function deriveMessageStatus(scheduledFor?: string | null): 'queued' | 'scheduled' {
  if (!scheduledFor) return 'queued';
  const ts = new Date(scheduledFor).getTime();
  if (Number.isNaN(ts)) return 'queued';
  return ts > Date.now() ? 'scheduled' : 'queued';
}

export function buildMessageRecordInsert(input: CreateMessageRecordInput): MessageRecordInsertShape {
  return {
    wedding_site_id: input.weddingSiteId,
    channel: input.channel,
    audience_filter: normalizeAudience(input.audience),
    recipient_filter: {
      audience: input.audience,
      ...(input.audience === 'custom' && input.guestIds?.length ? { guestIds: input.guestIds } : {}),
    },
    subject: input.channel === 'email' ? (input.subject ?? '') : null,
    body: input.body,
    status: deriveMessageStatus(input.scheduledFor),
    scheduled_for: input.scheduledFor ?? null,
    delivered_count: 0,
    failed_count: 0,
    recipient_count: 0,
    created_by: input.createdByUserId ?? null,
  };
}

export function buildMessageRecordFromComposer(
  weddingSiteId: string,
  state: MessageComposerState,
  createdByUserId?: string | null,
): MessageRecordInsertShape {
  return buildMessageRecordInsert({
    weddingSiteId,
    channel: state.channel,
    audience: state.audience,
    subject: state.subject,
    body: state.body,
    scheduledFor: state.scheduledFor,
    guestIds: state.guestIds,
    createdByUserId,
  });
}

export function buildSendBulkMessageInvokePayload(messageId: string): SendBulkMessageInvokePayload {
  return { messageId };
}
