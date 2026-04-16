import type { CommsChannel, TemplateCategory } from './messageComposerTypes';

export interface TemplateManagerItem {
  id: string;
  name: string;
  channel: CommsChannel;
  category: TemplateCategory;
  subject?: string | null;
  body: string;
  isSystem?: boolean;
  updatedAt?: string | null;
}

export interface TemplateManagerState {
  search: string;
  channel: CommsChannel | 'all';
  category: TemplateCategory | 'all';
}
