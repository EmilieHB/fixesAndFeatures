import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Item } from '../types/types';
import { sortItemsByTitle, sortItemsByType } from '../utils/sortItems';
import { filterItemsByStatus } from '../utils/filterItems';

interface ItemContextType {
  items: Item[];
  addItem: (item: Item) => void;
  sortItems: (method: string) => void;
  filterItems: (status: string) => void;
  setStatus: (id: number, status: string) => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

interface ItemProvider {
  children: ReactNode;
}

export const ItemProvider: React.FC<ItemProvider> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [originalItems, setOriginalItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      setOriginalItems(updatedItems);
      return updatedItems;
    });
  };

  const sortItems = (method: string) => {
    let sortedItems;
    if (method === 'title') {
      sortedItems = sortItemsByTitle(filteredItems.length > 0 ? filteredItems : items);
    } else if (method === 'type') {
      sortedItems = sortItemsByType(filteredItems.length > 0 ? filteredItems : items);
    } else {
      sortedItems = filteredItems.length > 0 ? filteredItems : items;
    }
    setFilteredItems(sortedItems);
    setItems(sortedItems);
  };

  const filterItems = (filterStatus: string) => {
    let filteredItems;
    if (filterStatus === '') {
      filteredItems = [...originalItems];
    } else {
      filteredItems = filterItemsByStatus(originalItems, filterStatus);
    }
    setFilteredItems(filteredItems);
    setItems(filteredItems);
  };

  const setStatus = (id: number, status: string) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) => (item.id === id ? { ...item, status } : item));
      setOriginalItems(updatedItems);
      return updatedItems;
    });
  };

  return (
    <ItemContext.Provider value={{ items, addItem, sortItems, filterItems, setStatus }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = (): ItemContextType => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemProvider');
  }
  return context;
};
