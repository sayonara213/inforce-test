import React from 'react';

import { Text, Flex } from '@mantine/core';

import styles from './nav.module.scss';
import { IconListCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <Link to={'/'} className={styles.wrapper}>
      <Flex gap={'sm'}>
        <IconListCheck size={24} />
        <Text>Product List</Text>
      </Flex>
    </Link>
  );
};
