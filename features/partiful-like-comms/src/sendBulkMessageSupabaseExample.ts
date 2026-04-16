import type { SupabaseClient } from '@supabase/supabase-js';
import type { MessageComposerState } from './messageComposerTypes';
import {
  buildMessageRecordFromComposer,
  buildSendBulkMessageInvokePayload,
} from './sendBulkMessageAdapter';

interface SaveAndSendOptions {
  weddingSiteId: string;
  composer: MessageComposerState;
  createdByUserId?: string | null;
  autoSend?: boolean;
}

/**
 * Example integration helper.
 *
 * Expected main-repo flow:
 * 1. Insert into `messages`
 * 2. If queued, invoke `send-bulk-message`
 * 3. If scheduled, let scheduler/worker pick it up later
 */
export async function saveAndOptionallySendMessage(
  supabase: SupabaseClient,
  options: SaveAndSendOptions,
) {
  const payload = buildMessageRecordFromComposer(
    options.weddingSiteId,
    options.composer,
    options.createdByUserId,
  );

  const { data, error } = await supabase
    .from('messages')
    .insert(payload)
    .select('id, status')
    .single();

  if (error) throw error;

  if (options.autoSend !== false && data.status === 'queued') {
    const invokePayload = buildSendBulkMessageInvokePayload(data.id);
    const { error: invokeError } = await supabase.functions.invoke('send-bulk-message', {
      body: invokePayload,
    });

    if (invokeError) throw invokeError;
  }

  return data;
}
