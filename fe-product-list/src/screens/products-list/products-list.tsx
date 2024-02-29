import React from 'react';

import styles from './products-list.module.scss';
import { ListTitle } from './list-title/list-title';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useGetAllProductsQuery } from '../../redux/services/products.api';
import { ItemsList } from './items-list/items-list';

export const ProductsList = () => {
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetAllProductsQuery();

  const isAvailable = data && data.length > 0 && !error && !isLoading;

  return (
    <div className={styles.container}>
      <ListTitle />
      {isAvailable && <ItemsList products={data} />}
    </div>
  );
};
