import { Item } from '../types/types';

export function filterItemsByStatus(items: Item[], statusFilter: string) {
  return items.filter((item) => item.status === statusFilter);
}
