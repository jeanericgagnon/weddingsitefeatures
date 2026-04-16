import type { SmsPlanPolicy, SmsSegmentUsage, SmsUsageSummary } from './smsSegmentTypes';

const GSM_7_BASIC = /^[\x0A\x0D\x20-\x7E£¥èéùìòÇØøÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ!"#¤%&'()*+,\-./0-9:;<=>?¡A-ZÄÖÑÜ§¿a-zäöñüà^{}\\\[~\]|€]*$/u;

export function isGsm7(message: string): boolean {
  return GSM_7_BASIC.test(message);
}

export function getCharactersPerSegment(message: string): number {
  return isGsm7(message) ? 160 : 70;
}

export function estimateSmsSegments(message: string): number {
  if (!message.length) return 0;
  const charsPerSegment = getCharactersPerSegment(message);
  return Math.ceil(message.length / charsPerSegment);
}

export function buildSmsSegmentUsage(
  message: string,
  policy?: SmsPlanPolicy,
  consumedSegments = 0,
): SmsSegmentUsage {
  const charactersUsed = message.length;
  const charactersPerSegment = getCharactersPerSegment(message);
  const segmentsUsed = estimateSmsSegments(message);
  const remainingIncludedSegments = policy
    ? Math.max(policy.includedSegments - consumedSegments - segmentsUsed, 0)
    : null;

  const thresholdReached = policy
    ? consumedSegments / policy.includedSegments >= policy.softWarningThresholdRatio
    : false;

  return {
    charactersUsed,
    charactersPerSegment,
    segmentsUsed,
    remainingIncludedSegments,
    warningLevel: thresholdReached ? 'soft' : 'none',
  };
}

export function summarizeSmsUsage(
  consumedSegments: number,
  policy: SmsPlanPolicy,
): SmsUsageSummary {
  const remainingSegments = Math.max(policy.includedSegments - consumedSegments, 0);
  return {
    includedSegments: policy.includedSegments,
    consumedSegments,
    remainingSegments,
    thresholdReached: consumedSegments / policy.includedSegments >= policy.softWarningThresholdRatio,
  };
}
