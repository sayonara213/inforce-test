import React from 'react';

import { Text, Flex } from '@mantine/core';

import styles from './nav.module.scss';
import { IconListCheck } from '@tabler/icons-react';

export const Nav: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Flex gap={'sm'}>
        <IconListCheck size={24} />
        <Text>Product List</Text>
      </Flex>
    </div>
  );
};
