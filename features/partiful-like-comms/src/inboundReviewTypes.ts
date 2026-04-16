export type InboundReviewState = 'unmatched' | 'needs_clarification' | 'resolved' | 'ignored';

export interface InboundReviewItem {
  id: string;
  from: string;
  rawBody: string;
  normalizedBody?: string | null;
  interpretedStatus?: 'confirmed' | 'declined' | 'pending' | null;
  processResult: InboundReviewState;
  receivedAt: string;
  possibleGuestName?: string | null;
  possibleWeddingSiteId?: string | null;
}
