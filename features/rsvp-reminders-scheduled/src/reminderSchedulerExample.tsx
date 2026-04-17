import React, { useMemo, useState } from 'react';
import type { ReminderPreset, ReminderSchedulerState } from './reminderSchedulerTypes';
import { buildSmsSegmentUsage } from '../../partiful-like-comms/src/smsSegmentUtils';

const presets: ReminderPreset[] = [
  { id: 'p7', label: '7 days before RSVP deadline', offsetDays: 7 },
  { id: 'p3', label: '3 days before RSVP deadline', offsetDays: 3 },
  { id: 'p1', label: '1 day before RSVP deadline', offsetDays: 1 },
];

const initialState: ReminderSchedulerState = {
  channel: 'sms',
  templateId: 'sms-reminder-1',
  subject: '',
  body: 'Hi {{guestFirstName}} — quick reminder to RSVP by {{deadline}}: {{rsvpLink}}',
  sendMode: 'scheduled',
  sendAt: '',
  guestCount: 87,
  audience: 'not_responded',
};

export function ReminderSchedulerExample() {
  const [state, setState] = useState<ReminderSchedulerState>(initialState);
  const [consumedSegments] = useState(640);

  const smsUsage = useMemo(() => (
    state.channel === 'sms'
      ? buildSmsSegmentUsage(state.body, { includedSegments: 1000, softWarningThresholdRatio: 0.8 }, consumedSegments)
      : null
  ), [state.body, state.channel, consumedSegments]);

  return (
    <section style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, maxWidth: 860 }}>
      <h2>Scheduled RSVP reminders</h2>
      <p style={{ color: '#666' }}>Audience preset: non-responders only.</p>

      <div style={{ display: 'grid', gap: 12 }}>
        <label>
          Channel
          <select value={state.channel} onChange={(e) => setState((prev) => ({ ...prev, channel: e.target.value as ReminderSchedulerState['channel'] }))}>
            <option value="sms">SMS</option>
            <option value="email">Email</option>
          </select>
        </label>

        <label>
          Preset
          <select defaultValue={presets[1].id}>
            {presets.map((preset) => (
              <option key={preset.id} value={preset.id}>{preset.label}</option>
            ))}
          </select>
        </label>

        <label>
          Send mode
          <select value={state.sendMode} onChange={(e) => setState((prev) => ({ ...prev, sendMode: e.target.value as ReminderSchedulerState['sendMode'] }))}>
            <option value="now">Send now</option>
            <option value="scheduled">Schedule</option>
          </select>
        </label>

        {state.sendMode === 'scheduled' ? (
          <label>
            Send at
            <input
              type="datetime-local"
              value={state.sendAt}
              onChange={(e) => setState((prev) => ({ ...prev, sendAt: e.target.value }))}
            />
          </label>
        ) : null}

        <label>
          Message
          <textarea
            rows={6}
            value={state.body}
            onChange={(e) => setState((prev) => ({ ...prev, body: e.target.value }))}
            style={{ width: '100%' }}
          />
        </label>

        <div>Guests to remind: <strong>{state.guestCount}</strong></div>

        {smsUsage ? (
          <div style={{ padding: 12, borderRadius: 10, background: '#fafafa' }}>
            <div>{smsUsage.charactersUsed} / {smsUsage.charactersPerSegment} characters</div>
            <div>{smsUsage.segmentsUsed} segment{smsUsage.segmentsUsed === 1 ? '' : 's'}</div>
            <div>{smsUsage.remainingIncludedSegments ?? 0} segments remaining</div>
          </div>
        ) : null}

        <button>{state.sendMode === 'now' ? 'Send reminder now' : 'Schedule reminder'}</button>
      </div>
    </section>
  );
}

export default ReminderSchedulerExample;
