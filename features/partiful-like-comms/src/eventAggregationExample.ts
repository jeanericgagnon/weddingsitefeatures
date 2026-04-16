import type { AggregatedGuestCommsEvent } from './eventAggregationTypes';
import { groupEventsByGuest } from './eventAggregationUtils';

export const sampleAggregatedEvents: AggregatedGuestCommsEvent[] = [
  {
    id: 'evt1',
    guestId: 'g1',
    guestName: 'Taylor Smith',
    source: 'message',
    type: 'invite_sent',
    timestamp: '2026-04-12T17:15:00.000Z',
    title: 'Invitation sent',
    channel: 'sms',
    status: 'success',
  },
  {
    id: 'evt2',
    guestId: 'g1',
    guestName: 'Taylor Smith',
    source: 'inbound_sms',
    type: 'sms_reply_received',
    timestamp: '2026-04-12T17:18:00.000Z',
    title: 'SMS reply received',
    description: 'Guest replied YES',
    channel: 'sms',
    status: 'success',
  },
  {
    id: 'evt3',
    guestId: 'g2',
    guestName: 'Jordan Lee',
    source: 'delivery',
    type: 'delivery_failed',
    timestamp: '2026-04-15T16:00:00.000Z',
    title: 'Message delivery failed',
    description: 'Carrier rejected destination number',
    channel: 'sms',
    status: 'error',
  },
];

export const sampleGroupedEvents = groupEventsByGuest(sampleAggregatedEvents);
