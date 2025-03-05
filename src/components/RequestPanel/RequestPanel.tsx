import React, { ReactElement } from 'react';
import { ItemCard } from '../ItemCard/ItemCard';
import { useItems } from '../../hooks/ItemContext';
import { FilterButton } from '../FilterButton/FilterButton';
import { SortButton } from '../SortButton/SortButton';
import { Item } from '../../types/types';
import './requestPanel.css';

interface RequestPanel {}

export const RequestPanel: React.FC<RequestPanel> = () => {
  const { items } = useItems();
  const itemCards = createItemCards(items);

  return (
    <div className="RequestPanel">
      <div className="FilterAndSortButtons">
        <FilterButton />
        <SortButton />
      </div>
      <div className="PanelContent">{itemCards}</div>
    </div>
  );
};

function createItemCards(items: Item[]): ReactElement[] {
  const itemCards: ReactElement[] = [];
  items.forEach((item) =>
    itemCards.push(
      <ItemCard
        title={item.title}
        description={item.description}
        type={item.type}
        status={item.status}
        id={item.id}
      />
    )
  );
  return itemCards;
}
