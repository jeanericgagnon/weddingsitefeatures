export interface ContactCaptureRequest {
  guestId: string;
  weddingSiteId: string;
  token: string;
  expiresAt: string;
  requestedChannel: 'sms' | 'email' | 'either';
}

export interface ContactCaptureSubmission {
  guestId: string;
  token: string;
  email?: string | null;
  phone?: string | null;
  smsConsent?: boolean | null;
}

export interface ContactCaptureState {
  email: string;
  phone: string;
  smsConsent: boolean;
}
