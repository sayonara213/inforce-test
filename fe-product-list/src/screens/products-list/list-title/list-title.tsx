import React from 'react';

import { Button, Flex, Text } from '@mantine/core';
import { AddItem } from './add-item/add-item';

export const ListTitle: React.FC = () => {
  return (
    <Flex justify={'space-between'} align={'center'}>
      <Text size='xl' fw={'bold'}>
        Products:
      </Text>
      <Flex gap={6}>
        <AddItem />
        <Button variant='outline'>Sort by</Button>
      </Flex>
    </Flex>
  );
};
