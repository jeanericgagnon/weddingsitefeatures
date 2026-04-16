import type {
  RequestContactCaptureRequest,
  ResolveInboundReviewRequest,
  SaveDraftMessageRequest,
  SendMessageNowRequest,
} from '../contracts/comms-api-contracts';

export interface CommsApiClient {
  saveDraftMessage(input: SaveDraftMessageRequest): Promise<unknown>;
  sendMessageNow(input: SendMessageNowRequest): Promise<unknown>;
  requestContactCapture(input: RequestContactCaptureRequest): Promise<unknown>;
  resolveInboundReview(input: ResolveInboundReviewRequest): Promise<unknown>;
}

export interface SupabaseFunctionInvoker {
  invoke(name: string, options: { body: unknown }): Promise<{ data?: unknown; error?: Error | null }>;
}

export function createSupabaseCommsApiClient(functions: SupabaseFunctionInvoker): CommsApiClient {
  return {
    async saveDraftMessage(input) {
      return { ok: true, input };
    },
    async sendMessageNow(input) {
      const result = await functions.invoke('send-bulk-message', { body: input });
      if (result.error) throw result.error;
      return result.data;
    },
    async requestContactCapture(input) {
      return { ok: true, input };
    },
    async resolveInboundReview(input) {
      return { ok: true, input };
    },
  };
}
