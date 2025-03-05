
import { Item } from '../types/types';
import { filterItemsByStatus } from './filterItems';

describe('Filters', () => {
  const sampleItems: Item[] = [
    { id: 1, title: 'Fix login issue', description: 'Login page error', type: 'Bug', status: 'Open' },
    { id: 2, title: 'Add new feature', description: 'Feature addition', type: 'Feature', status: 'Closed' },
    { id: 3, title: 'Fix bug in app', description: 'App crashing on load', type: 'Bug', status: 'Closed' },
    { id: 4, title: 'Refactor codebase', description: 'Code refactoring task', type: 'Feature', status: 'Open' },
  ];

  describe('filterItemsByStatus', () => {
    it('should filter items by status "Open"', () => {
      const result = filterItemsByStatus(sampleItems, 'Open');
      expect(result).toEqual([
        { id: 1, title: 'Fix login issue', description: 'Login page error', type: 'Bug', status: 'Open' },
        { id: 4, title: 'Refactor codebase', description: 'Code refactoring task', type: 'Feature', status: 'Open' },
      ]);
    });

    it('should return an empty array when no items match the status', () => {
      const result = filterItemsByStatus(sampleItems, 'Completed');
      expect(result).toEqual([]);
    });
  })
});