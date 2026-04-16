export interface ScreenIntegrationTarget {
  area: string;
  goal: string;
  likelyPaths: string[];
  shouldAdd: string[];
}

export const weddingSiteBoltCommsScreenMap: ScreenIntegrationTarget[] = [
  {
    area: 'Messages dashboard',
    goal: 'Own campaign list, composer entry, analytics, and template access',
    likelyPaths: ['src/pages/dashboard/messages', 'src/components/messages', 'src/features/comms'],
    shouldAdd: ['campaign analytics panel', 'template manager entry', 'inbound review queue entry'],
  },
  {
    area: 'Guests dashboard',
    goal: 'Trigger invites/reminders/contact requests and open guest timeline',
    likelyPaths: ['src/pages/dashboard/guests', 'src/components/guests'],
    shouldAdd: ['row actions', 'bulk actions', 'guest comms timeline panel'],
  },
  {
    area: 'Public RSVP flow',
    goal: 'Bridge RSVP and contact capture states cleanly',
    likelyPaths: ['src/pages/rsvp', 'src/components/rsvp'],
    shouldAdd: ['contact capture handoff', 'SMS reply expectation copy'],
  },
  {
    area: 'Admin review workflow',
    goal: 'Handle unmatched/ambiguous inbound SMS safely',
    likelyPaths: ['src/pages/dashboard/messages', 'src/features/comms'],
    shouldAdd: ['inbound review queue', 'resolve/match guest actions'],
  },
];
