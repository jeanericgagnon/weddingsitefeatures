import React, { useMemo, useState } from 'react';
import type { CommsTemplateRecord, MessageComposerState } from './messageComposerTypes';
import { starterTemplates, templateVariables } from './messageComposerTemplates';
import { applyTemplateRecord, buildComposerPreview, canSendComposer } from './messageComposerUtils';

const defaultVars = {
  '{{guestFirstName}}': 'Taylor',
  '{{coupleNames}}': 'Sam & Jordan',
  '{{eventDate}}': 'June 14, 2026',
  '{{venueName}}': 'Villa Amara',
  '{{rsvpLink}}': 'https://dayof.love/rsvp/demo123',
  '{{deadline}}': 'May 20',
};

const initialTemplate = starterTemplates[0];
const initialState: MessageComposerState = {
  channel: initialTemplate.channel,
  audience: 'not_responded',
  templateId: initialTemplate.id,
  subject: initialTemplate.subject ?? '',
  body: initialTemplate.body,
  guestIds: [],
};

export function MessageComposerExample() {
  const [state, setState] = useState<MessageComposerState>(initialState);

  const visibleTemplates = useMemo(
    () => starterTemplates.filter((template) => template.channel === state.channel),
    [state.channel],
  );

  const preview = useMemo(() => buildComposerPreview(state, defaultVars), [state]);

  const onTemplateChange = (templateId: string) => {
    const template = starterTemplates.find((entry) => entry.id === templateId);
    if (!template) return;

    const applied = applyTemplateRecord(template, defaultVars);
    setState((prev) => ({
      ...prev,
      channel: template.channel,
      templateId: template.id,
      subject: applied.subject,
      body: applied.body,
    }));
  };

  const setChannel = (channel: MessageComposerState['channel']) => {
    const fallback = starterTemplates.find((template) => template.channel === channel) as CommsTemplateRecord | undefined;
    setState((prev) => {
      if (!fallback) return { ...prev, channel };
      return {
        ...prev,
        channel,
        templateId: fallback.id,
        subject: fallback.subject ?? '',
        body: fallback.body,
      };
    });
  };

  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 960, gridTemplateColumns: '1fr 1fr' }}>
      <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 12 }}>
        <h2>Message composer</h2>

        <label>
          Channel
          <select value={state.channel} onChange={(e) => setChannel(e.target.value as MessageComposerState['channel'])}>
            <option value="sms">SMS</option>
            <option value="email">Email</option>
          </select>
        </label>

        <br />
        <br />

        <label>
          Audience
          <select value={state.audience} onChange={(e) => setState((prev) => ({ ...prev, audience: e.target.value as MessageComposerState['audience'] }))}>
            <option value="all">All guests</option>
            <option value="attending">Attending</option>
            <option value="not_responded">Not responded</option>
            <option value="declined">Declined</option>
            <option value="custom">Custom</option>
          </select>
        </label>

        <br />
        <br />

        <label>
          Template
          <select value={state.templateId} onChange={(e) => onTemplateChange(e.target.value)}>
            {visibleTemplates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </label>

        <br />
        <br />

        {state.channel === 'email' ? (
          <>
            <label>
              Subject
              <input
                value={state.subject}
                onChange={(e) => setState((prev) => ({ ...prev, subject: e.target.value }))}
                style={{ width: '100%' }}
              />
            </label>
            <br />
            <br />
          </>
        ) : null}

        <label>
          Body
          <textarea
            value={state.body}
            onChange={(e) => setState((prev) => ({ ...prev, body: e.target.value }))}
            rows={10}
            style={{ width: '100%' }}
          />
        </label>

        <p>
          Ready to send: <strong>{canSendComposer(state) ? 'yes' : 'no'}</strong>
        </p>
      </section>

      <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 12 }}>
        <h2>Preview</h2>
        {preview.subject ? <p><strong>{preview.subject}</strong></p> : null}
        <pre style={{ whiteSpace: 'pre-wrap' }}>{preview.renderedBody}</pre>

        <h3>Available variables</h3>
        <ul>
          {templateVariables.map((variable) => (
            <li key={variable.key}>
              <code>{variable.key}</code> — {variable.label} ({variable.example})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MessageComposerExample;
