import type { AggregatedGuestCommsEvent } from './eventAggregationTypes';

export function sortAggregatedEvents(events: AggregatedGuestCommsEvent[]): AggregatedGuestCommsEvent[] {
  return [...events].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export function groupEventsByGuest(events: AggregatedGuestCommsEvent[]): Record<string, AggregatedGuestCommsEvent[]> {
  return sortAggregatedEvents(events).reduce<Record<string, AggregatedGuestCommsEvent[]>>((acc, event) => {
    if (!acc[event.guestId]) acc[event.guestId] = [];
    acc[event.guestId].push(event);
    return acc;
  }, {});
}
