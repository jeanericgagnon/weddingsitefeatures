export interface SmsSegmentUsage {
  charactersUsed: number;
  charactersPerSegment: number;
  segmentsUsed: number;
  remainingIncludedSegments?: number | null;
  warningLevel?: 'none' | 'soft' | 'hard';
}

export interface SmsPlanPolicy {
  includedSegments: number;
  softWarningThresholdRatio: number;
}

export interface SmsUsageSummary {
  includedSegments: number;
  consumedSegments: number;
  remainingSegments: number;
  thresholdReached: boolean;
}
