import React from 'react';
import { IComment } from '../../../../../types/product.types';
import { Text } from '@mantine/core';
import styles from './comments-list-item.module.scss';

interface CommentsListItemProps {
  comment: IComment;
}

export const CommentsListItem: React.FC<CommentsListItemProps> = ({ comment }) => {
  const formatedDate = new Date(comment.date).toLocaleDateString();

  return (
    <div className={styles.wrapper}>
      {comment.description}
      <Text c={'dimmed'} size='sm' className={styles.date}>
        {formatedDate}
      </Text>
    </div>
  );
};
