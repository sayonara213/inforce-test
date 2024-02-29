import React, { useState } from 'react';
import { IComment } from '../../../types/product.types';
import { ProductCommentsList } from './product-comments-list/product-comments-list';
import { AddComment } from './product-comments-add/product-comments-add';
import { Container } from '@mantine/core';
import styles from './product-comments.module.scss';

interface ProductCommentsProps {
  comments?: IComment[];
  productId: string;
}

export const ProductComments: React.FC<ProductCommentsProps> = ({ comments, productId }) => {
  const [commentsState, setCommentsState] = useState<IComment[] | undefined>(comments);

  const handleAddComment = (text: string) => {
    const newComment: IComment = {
      id: Math.random().toString(),
      productId,
      description: text,
      date: new Date().toISOString(),
    };

    setCommentsState((state) => (state ? [...state, newComment] : [newComment]));
  };

  return (
    <div className={styles.wrapper}>
      <AddComment productId={productId} addComment={handleAddComment} />
      {commentsState && <ProductCommentsList comments={commentsState} />}
    </div>
  );
};
