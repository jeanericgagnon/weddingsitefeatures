import React, { useMemo, useState } from 'react';
import type { TemplateManagerItem, TemplateManagerState } from './templateManagerTypes';
import { filterTemplates } from './templateManagerUtils';

const sampleTemplates: TemplateManagerItem[] = [
  {
    id: 't1',
    name: 'SMS Invite',
    channel: 'sms',
    category: 'invite',
    body: 'Hi {{guestFirstName}} — RSVP here: {{rsvpLink}}',
    isSystem: true,
    updatedAt: '2026-04-16',
  },
  {
    id: 't2',
    name: 'Email Reminder',
    channel: 'email',
    category: 'reminder',
    subject: 'Friendly RSVP reminder',
    body: 'Please RSVP by {{deadline}}.',
    updatedAt: '2026-04-15',
  },
];

const initialState: TemplateManagerState = {
  search: '',
  channel: 'all',
  category: 'all',
};

export function TemplateManagerExample() {
  const [state, setState] = useState<TemplateManagerState>(initialState);
  const templates = useMemo(() => filterTemplates(sampleTemplates, state), [state]);

  return (
    <section style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, maxWidth: 960 }}>
      <h2>Template manager</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          placeholder="Search templates"
          value={state.search}
          onChange={(e) => setState((prev) => ({ ...prev, search: e.target.value }))}
        />
        <select value={state.channel} onChange={(e) => setState((prev) => ({ ...prev, channel: e.target.value as TemplateManagerState['channel'] }))}>
          <option value="all">All channels</option>
          <option value="sms">SMS</option>
          <option value="email">Email</option>
        </select>
        <select value={state.category} onChange={(e) => setState((prev) => ({ ...prev, category: e.target.value as TemplateManagerState['category'] }))}>
          <option value="all">All categories</option>
          <option value="invite">Invite</option>
          <option value="reminder">Reminder</option>
          <option value="announcement">Announcement</option>
          <option value="follow_up">Follow-up</option>
        </select>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        {templates.map((template) => (
          <article key={template.id} style={{ padding: 12, border: '1px solid #eee', borderRadius: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <strong>{template.name}</strong>
              <span style={{ fontSize: 12, color: '#666' }}>{template.channel} · {template.category}</span>
            </div>
            {template.subject ? <div style={{ marginTop: 8 }}><strong>Subject:</strong> {template.subject}</div> : null}
            <pre style={{ whiteSpace: 'pre-wrap', margin: '8px 0 0 0' }}>{template.body}</pre>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TemplateManagerExample;
