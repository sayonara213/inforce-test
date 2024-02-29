import React from 'react';
import { IProduct } from '../../../types/product.types';
import { Card, SimpleGrid } from '@mantine/core';
import { ItemCard } from './item-card/item-card';
import { useDeleteProductMutation } from '../../../redux/services/products.api';

interface ItemsListProps {
  products: IProduct[];
}

export const ItemsList: React.FC<ItemsListProps> = ({ products }) => {
  const [serverDeleteProduct] = useDeleteProductMutation();

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
      {products.map((product) => (
        <ItemCard key={product.id} product={product} deleteProduct={serverDeleteProduct} />
      ))}
    </SimpleGrid>
  );
};
