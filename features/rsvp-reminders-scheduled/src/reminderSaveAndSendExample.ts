import type { ScheduledReminderDraft } from '../contracts/reminder-contracts';
import { buildReminderMessageInsert } from './reminderPayloadAdapter';

export interface ReminderSupabaseLikeClient {
  from(table: string): {
    insert(payload: unknown): {
      select(fields: string): { single(): Promise<{ data: { id: string; status: string }; error: unknown }> }
    }
  };
  functions: {
    invoke(name: string, options: { body: unknown }): Promise<{ data?: unknown; error?: unknown }>;
  };
}

export async function saveAndOptionallySendReminder(
  client: ReminderSupabaseLikeClient,
  draft: ScheduledReminderDraft,
) {
  const payload = buildReminderMessageInsert(draft);
  const { data, error } = await client
    .from('messages')
    .insert(payload)
    .select('id, status')
    .single();

  if (error) throw error;

  if (data.status === 'queued') {
    const invokeResult = await client.functions.invoke('send-bulk-message', {
      body: { messageId: data.id },
    });
    if (invokeResult.error) throw invokeResult.error;
  }

  return data;
}
