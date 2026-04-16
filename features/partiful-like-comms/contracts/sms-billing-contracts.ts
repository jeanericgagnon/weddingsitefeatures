export interface SmsBillingPolicyContract {
  includedSegments: number;
  unit: 'segment';
  softWarningThresholdRatio: number;
  warnCopy: string;
}

export interface SmsComposerMeterContract {
  charactersUsed: number;
  charactersPerSegment: number;
  segmentsUsed: number;
  remainingSegments: number;
  warningMessage?: string | null;
}
