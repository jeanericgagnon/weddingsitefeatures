export interface CampaignAnalyticsSummary {
  messageId: string;
  channel: 'sms' | 'email';
  status: 'draft' | 'queued' | 'scheduled' | 'sending' | 'sent' | 'partial_failure' | 'failed';
  recipientCount: number;
  deliveredCount: number;
  failedCount: number;
  repliedCount?: number;
  confirmedCount?: number;
  declinedCount?: number;
}

export interface CampaignDeliveryRow {
  id: string;
  guestId: string;
  guestName: string;
  destination: string;
  status: 'sent' | 'delivered' | 'failed' | 'unknown';
  failureReason?: string | null;
  attemptedAt?: string | null;
}
