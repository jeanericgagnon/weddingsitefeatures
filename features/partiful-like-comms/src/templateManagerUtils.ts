import type { TemplateManagerItem, TemplateManagerState } from './templateManagerTypes';

export function filterTemplates(
  templates: TemplateManagerItem[],
  state: TemplateManagerState,
): TemplateManagerItem[] {
  const search = state.search.trim().toLowerCase();

  return templates.filter((template) => {
    const matchesSearch = !search
      || template.name.toLowerCase().includes(search)
      || template.body.toLowerCase().includes(search)
      || (template.subject || '').toLowerCase().includes(search);

    const matchesChannel = state.channel === 'all' || template.channel === state.channel;
    const matchesCategory = state.category === 'all' || template.category === state.category;

    return matchesSearch && matchesChannel && matchesCategory;
  });
}
