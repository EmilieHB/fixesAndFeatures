import { Item } from "../types/types";
import { sortItemsByTitle, sortItemsByType } from "./sortItems";

describe('Sorting', () => {
  const sampleItems: Item[] = [
    { id: 1, title: 'Fix login issue', description: 'Login page error', type: 'Bug', status: 'Open' },
    { id: 2, title: 'Add new feature', description: 'Feature addition', type: 'Feature', status: 'Closed' },
    { id: 3, title: 'Fix bug in app', description: 'App crashing on load', type: 'Bug', status: 'Closed' },
    { id: 4, title: 'Refactor codebase', description: 'Code refactoring task', type: 'Feature', status: 'Open' },
  ];

  describe('sortItemsByType', () => {
    it('should place "Bug" items first, followed by others', () => {
      const result = sortItemsByType(sampleItems);
      expect(result[0].type).toBe('Bug');
      expect(result[1].type).toBe('Bug');
      expect(result[2].type).toBe('Feature');
      expect(result[3].type).toBe('Feature');
    });

    it('should return items in the same order if there are no "Bug" items', () => {
      const result = sortItemsByType([
        { id: 1, title: 'Feature', description: 'Feature task', type: 'Feature', status: 'Open' },
        { id: 2, title: 'Improvement', description: 'Improvement task', type: 'Feature', status: 'Closed' },
      ]);
      expect(result[0].type).toBe('Feature');
      expect(result[1].type).toBe('Feature');
    });
  });

  describe('sortItemsByTitle', () => {
    it('should sort items alphabetically by title', () => {
      const result = sortItemsByTitle(sampleItems);
      expect(result[0].title).toBe('Add new feature');
      expect(result[1].title).toBe('Fix bug in app');
      expect(result[2].title).toBe('Fix login issue');
      expect(result[3].title).toBe('Refactor codebase');
    });

    it('should handle items with identical titles correctly', () => {
      const itemsWithIdenticalTitles: Item[] = [
        { id: 1, title: 'Feature', description: 'A feature', type: 'Feature', status: 'Open' },
        { id: 2, title: 'Feature', description: 'Another feature', type: 'Feature', status: 'Closed' },
      ];
      const result = sortItemsByTitle(itemsWithIdenticalTitles);
      expect(result[0].title).toBe('Feature');
      expect(result[1].title).toBe('Feature');
    });

    it('should not mutate the original items array', () => {
      const itemsCopy = [...sampleItems];
      const result = sortItemsByTitle(sampleItems);
      expect(result).not.toBe(sampleItems); // Ensure it's a new array
      expect(result).toEqual(sampleItems.sort((a, b) => a.title.localeCompare(b.title))); // Ensure sorted correctly
    });
  });
});
