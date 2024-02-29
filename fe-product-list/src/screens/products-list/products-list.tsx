import React from 'react';

import styles from './products-list.module.scss';
import { ListTitle } from './list-title/list-title';

export const ProductsList = () => {
  return (
    <div className={styles.container}>
      <ListTitle />
    </div>
  );
};
