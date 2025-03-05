export type ItemType = 'Bug' | 'Feature';

export interface Item {
  id: number;
  title: string;
  description: string;
  type: ItemType;
  status: string;
}
