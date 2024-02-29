import React from 'react';

import styles from './products-list.module.scss';
import { ListTitle } from './list-title/list-title';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useGetAllProductsQuery } from '../../redux/services/products.api';
import { ItemsList } from './items-list/items-list';

export const ProductsList: React.FC = () => {
  const { error, isLoading } = useGetAllProductsQuery();

  const { products } = useAppSelector((state) => state.products);

  const isAvailable = products && products.length > 0 && !error && !isLoading;

  return (
    <div className={styles.container}>
      <ListTitle />
      {isAvailable && <ItemsList products={products} />}
    </div>
  );
};
