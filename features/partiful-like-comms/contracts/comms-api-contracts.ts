export interface SaveDraftMessageRequest {
  weddingSiteId: string;
  channel: 'sms' | 'email';
  audience: 'all' | 'attending' | 'not_responded' | 'declined' | 'custom';
  guestIds?: string[];
  subject?: string;
  body: string;
  scheduledFor?: string | null;
}

export interface SaveDraftMessageResponse {
  messageId: string;
  status: 'draft' | 'queued' | 'scheduled';
}

export interface SendMessageNowRequest {
  messageId: string;
}

export interface RequestContactCaptureRequest {
  guestIds: string[];
  requestedChannel: 'sms' | 'email' | 'either';
}

export interface ResolveInboundReviewRequest {
  inboundEventId: string;
  resolution: 'match_guest' | 'mark_resolved' | 'ignore';
  guestId?: string;
}

export interface ListGuestTimelineResponse {
  guestId: string;
  events: Array<{
    id: string;
    type: string;
    title: string;
    description?: string | null;
    timestamp: string;
    channel?: 'sms' | 'email';
    status?: 'info' | 'success' | 'warning' | 'error';
  }>;
}
