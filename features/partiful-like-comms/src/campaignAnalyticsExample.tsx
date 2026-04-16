import React from 'react';
import type { CampaignAnalyticsSummary, CampaignDeliveryRow } from './campaignAnalyticsTypes';

export function CampaignAnalyticsExample({
  summary,
  deliveries,
}: {
  summary: CampaignAnalyticsSummary;
  deliveries: CampaignDeliveryRow[];
}) {
  return (
    <section style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, maxWidth: 960 }}>
      <h2>Campaign analytics</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <Metric label="Recipients" value={summary.recipientCount} />
        <Metric label="Delivered" value={summary.deliveredCount} />
        <Metric label="Failed" value={summary.failedCount} />
        <Metric label="Replies" value={summary.repliedCount ?? 0} />
        <Metric label="Confirmed" value={summary.confirmedCount ?? 0} />
        <Metric label="Declined" value={summary.declinedCount ?? 0} />
      </div>

      <h3 style={{ marginTop: 20 }}>Delivery rows</h3>
      <div style={{ display: 'grid', gap: 10 }}>
        {deliveries.map((row) => (
          <article key={row.id} style={{ padding: 12, border: '1px solid #eee', borderRadius: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <strong>{row.guestName}</strong>
              <span>{row.status}</span>
            </div>
            <div style={{ fontSize: 12, color: '#666' }}>{row.destination}</div>
            {row.failureReason ? <div style={{ color: '#991b1b', marginTop: 8 }}>{row.failureReason}</div> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 10, padding: 12 }}>
      <div style={{ fontSize: 12, color: '#666' }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 700 }}>{value}</div>
    </div>
  );
}

export const sampleCampaignSummary: CampaignAnalyticsSummary = {
  messageId: 'msg_1',
  channel: 'sms',
  status: 'sent',
  recipientCount: 120,
  deliveredCount: 106,
  failedCount: 14,
  repliedCount: 39,
  confirmedCount: 28,
  declinedCount: 11,
};

export const sampleCampaignDeliveries: CampaignDeliveryRow[] = [
  {
    id: 'd1',
    guestId: 'g1',
    guestName: 'Taylor Smith',
    destination: '+16195551234',
    status: 'delivered',
    attemptedAt: '2026-04-16 11:00',
  },
  {
    id: 'd2',
    guestId: 'g2',
    guestName: 'Jordan Lee',
    destination: '+16195550000',
    status: 'failed',
    failureReason: 'Carrier rejected destination number',
    attemptedAt: '2026-04-16 11:00',
  },
];

export default CampaignAnalyticsExample;
