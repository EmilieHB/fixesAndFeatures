import { Item } from '../types/types';

export function sortItemsByType(items: Item[]) {
  return [...items].sort((a, b) => {
    if (a.type === 'Bug' && b.type !== 'Bug') return -1;
    if (a.type !== 'Bug' && b.type === 'Bug') return 1;
    return 0;
  });
}

export function sortItemsByTitle(items: Item[]) {
  return [...items].sort((a, b) => a.title.localeCompare(b.title));
}
