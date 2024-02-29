import React from 'react';
import { IProduct } from '../../../types/product.types';
import { Card, SimpleGrid } from '@mantine/core';
import { ItemCard } from './item-card/item-card';

interface ItemsListProps {
  products: IProduct[];
}

export const ItemsList: React.FC<ItemsListProps> = ({ products }) => {
  return (
    <SimpleGrid cols={3}>
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};
