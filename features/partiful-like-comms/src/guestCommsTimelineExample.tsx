import React from 'react';
import type { GuestCommsTimelineProps } from './guestCommsTimelineTypes';

const statusColor: Record<string, string> = {
  info: '#4b5563',
  success: '#166534',
  warning: '#92400e',
  error: '#991b1b',
};

export function GuestCommsTimelineExample({ guestName, guestId, events }: GuestCommsTimelineProps) {
  return (
    <section style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, maxWidth: 760 }}>
      <header style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>Guest comms timeline</h2>
        <p style={{ margin: '8px 0 0 0', color: '#666' }}>
          {guestName} · {guestId}
        </p>
      </header>

      <div style={{ display: 'grid', gap: 12 }}>
        {events.map((event) => (
          <article
            key={event.id}
            style={{
              borderLeft: `4px solid ${statusColor[event.status || 'info']}`,
              paddingLeft: 12,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <strong>{event.title}</strong>
              <span style={{ color: '#666', fontSize: 12 }}>{event.timestamp}</span>
            </div>
            {event.channel ? (
              <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>Channel: {event.channel}</div>
            ) : null}
            {event.description ? <p style={{ margin: '8px 0 0 0' }}>{event.description}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export const sampleGuestTimelineEvents = [
  {
    id: 'evt_1',
    type: 'invite_sent',
    title: 'Invitation sent',
    description: 'Initial SMS invitation delivered.',
    channel: 'sms',
    timestamp: '2026-04-12 10:15',
    status: 'success',
  },
  {
    id: 'evt_2',
    type: 'sms_inbound',
    title: 'Inbound SMS reply received',
    description: 'Guest replied YES.',
    channel: 'sms',
    timestamp: '2026-04-12 10:18',
    status: 'success',
  },
  {
    id: 'evt_3',
    type: 'rsvp_updated',
    title: 'RSVP marked confirmed',
    description: 'Status auto-updated from inbound reply.',
    timestamp: '2026-04-12 10:18',
    status: 'success',
  },
  {
    id: 'evt_4',
    type: 'reminder_sent',
    title: 'Reminder send failed',
    description: 'Carrier rejected destination number.',
    channel: 'sms',
    timestamp: '2026-04-15 09:00',
    status: 'error',
  },
] satisfies GuestCommsTimelineProps['events'];

export default GuestCommsTimelineExample;
