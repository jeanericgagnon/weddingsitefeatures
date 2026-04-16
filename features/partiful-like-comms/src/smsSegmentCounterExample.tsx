import React, { useMemo, useState } from 'react';
import type { SmsPlanPolicy } from './smsSegmentTypes';
import { buildSmsSegmentUsage, summarizeSmsUsage } from './smsSegmentUtils';

const demoPolicy: SmsPlanPolicy = {
  includedSegments: 1000,
  softWarningThresholdRatio: 0.8,
};

export function SmsSegmentCounterExample() {
  const [message, setMessage] = useState('Hi Taylor — quick reminder to RSVP here: https://dayof.love/rsvp/demo123');
  const [consumedSegments] = useState(13);

  const usage = useMemo(
    () => buildSmsSegmentUsage(message, demoPolicy, consumedSegments),
    [message, consumedSegments],
  );

  const summary = useMemo(
    () => summarizeSmsUsage(consumedSegments, demoPolicy),
    [consumedSegments],
  );

  return (
    <section style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, maxWidth: 760 }}>
      <h2>SMS segment counter</h2>
      <p style={{ color: '#666' }}>Bill and limit by segments, not vague “texts.”</p>

      <textarea
        rows={6}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%' }}
      />

      <div style={{ display: 'grid', gap: 6, marginTop: 12 }}>
        <div>{usage.charactersUsed} / {usage.charactersPerSegment} characters</div>
        <div>
          {usage.segmentsUsed} segment{usage.segmentsUsed === 1 ? '' : 's'}
          {usage.segmentsUsed > 1 ? ' ⚠️' : ''}
        </div>
        <div>{usage.remainingIncludedSegments ?? 0} segments remaining</div>
      </div>

      {summary.thresholdReached ? (
        <div style={{ marginTop: 12, padding: 12, borderRadius: 10, background: '#fff7ed', color: '#9a3412' }}>
          You’re running low on text credits.
        </div>
      ) : null}
    </section>
  );
}

export default SmsSegmentCounterExample;
