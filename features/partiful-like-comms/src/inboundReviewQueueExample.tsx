import React from 'react';
import type { InboundReviewItem } from './inboundReviewTypes';

export function InboundReviewQueueExample({ items }: { items: InboundReviewItem[] }) {
  return (
    <section style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, maxWidth: 920 }}>
      <h2>Inbound SMS review queue</h2>
      <p style={{ color: '#666' }}>Review unmatched or ambiguous inbound messages before they turn into silent failures.</p>

      <div style={{ display: 'grid', gap: 12 }}>
        {items.map((item) => (
          <article key={item.id} style={{ padding: 12, background: '#fafafa', borderRadius: 10, border: '1px solid #eee' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <strong>{item.from}</strong>
              <span style={{ fontSize: 12, color: '#666' }}>{item.receivedAt}</span>
            </div>
            <p style={{ margin: '8px 0' }}>{item.rawBody}</p>
            <div style={{ fontSize: 12, color: '#666' }}>
              state: {item.processResult}
              {item.interpretedStatus ? ` · interpreted: ${item.interpretedStatus}` : ''}
              {item.possibleGuestName ? ` · possible match: ${item.possibleGuestName}` : ''}
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button>Match guest</button>
              <button>Mark resolved</button>
              <button>Ignore</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export const sampleInboundReviewItems: InboundReviewItem[] = [
  {
    id: 'in_1',
    from: '+16195551234',
    rawBody: 'yep we will be there',
    normalizedBody: 'yep we will be there',
    interpretedStatus: null,
    processResult: 'needs_clarification',
    receivedAt: '2026-04-16 11:12',
    possibleGuestName: 'Taylor Smith',
    possibleWeddingSiteId: 'site_123',
  },
  {
    id: 'in_2',
    from: '+16195559876',
    rawBody: 'YES',
    normalizedBody: 'yes',
    interpretedStatus: 'confirmed',
    processResult: 'unmatched',
    receivedAt: '2026-04-16 11:14',
  },
];

export default InboundReviewQueueExample;
