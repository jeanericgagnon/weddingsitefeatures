import { strict as assert } from 'node:assert';
import { buildSmsSegmentUsage, estimateSmsSegments, getCharactersPerSegment, summarizeSmsUsage } from './smsSegmentUtils.ts';

assert.equal(estimateSmsSegments('hello'), 1);
assert.equal(getCharactersPerSegment('hello'), 160);
assert.equal(estimateSmsSegments('a'.repeat(161)), 2);
assert.equal(getCharactersPerSegment('🎉'), 70);

const usage = buildSmsSegmentUsage('a'.repeat(181), {
  includedSegments: 1000,
  softWarningThresholdRatio: 0.8,
}, 11);
assert.equal(usage.segmentsUsed, 2);
assert.equal(usage.remainingIncludedSegments, 987);

const summary = summarizeSmsUsage(800, {
  includedSegments: 1000,
  softWarningThresholdRatio: 0.8,
});
assert.equal(summary.thresholdReached, true);

console.log('smsSegmentUtils tests passed');
