import React, { useState } from 'react';
import type { ContactCaptureState } from './contactCaptureTypes';

const initialState: ContactCaptureState = {
  email: '',
  phone: '',
  smsConsent: false,
};

export function ContactCaptureExample() {
  const [state, setState] = useState<ContactCaptureState>(initialState);

  return (
    <section style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, maxWidth: 640 }}>
      <h2>Guest contact capture</h2>
      <p style={{ color: '#666' }}>Add missing contact details so the couple can send updates and RSVP reminders.</p>

      <label>
        Email
        <input
          value={state.email}
          onChange={(e) => setState((prev) => ({ ...prev, email: e.target.value }))}
          style={{ width: '100%' }}
        />
      </label>

      <br />
      <br />

      <label>
        Phone
        <input
          value={state.phone}
          onChange={(e) => setState((prev) => ({ ...prev, phone: e.target.value }))}
          style={{ width: '100%' }}
        />
      </label>

      <br />
      <br />

      <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={state.smsConsent}
          onChange={(e) => setState((prev) => ({ ...prev, smsConsent: e.target.checked }))}
        />
        I agree to receive SMS updates about this event.
      </label>

      <p style={{ marginTop: 16, fontSize: 12, color: '#666' }}>
        Intended follow-up: save to guest record, log audit event, then optionally hand off to RSVP flow.
      </p>
    </section>
  );
}

export default ContactCaptureExample;
