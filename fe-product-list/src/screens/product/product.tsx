import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../redux/services/products.api';
import { ProductInfo, ProductInfoSkeleton } from './product-info/product-info';
import styles from './product.module.scss';
import { ProductComments } from './product-comments/product-comments';

export const ProductScreen = () => {
  const params = useParams();

  const { data, error, isLoading } = useGetProductByIdQuery(params.id!);

  if (isLoading || error || !data)
    return (
      <div className={styles.container}>
        <ProductInfoSkeleton />
      </div>
    );

  return (
    <div className={styles.container}>
      <ProductInfo product={data} />
      <ProductComments comments={data.comments} productId={data.id} />
    </div>
  );
};
