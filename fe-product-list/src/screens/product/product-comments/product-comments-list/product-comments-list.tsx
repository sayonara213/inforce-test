import React from 'react';
import { IComment } from '../../../../types/product.types';
import { CommentsListItem } from './comments-list-item/comments-list-item';

import styles from './product-comments-list.module.scss';

interface ProductCommentsListProps {
  comments: IComment[];
}

export const ProductCommentsList: React.FC<ProductCommentsListProps> = ({ comments }) => {
  return (
    <div className={styles.wrapper}>
      {comments.map((comment) => (
        <CommentsListItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
