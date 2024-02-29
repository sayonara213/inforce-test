import React from 'react';

import { Button, Flex, Text } from '@mantine/core';

export const ListTitle: React.FC = () => {
  return (
    <Flex justify={'space-between'} align={'center'}>
      <Text size='xl' fw={'bold'}>
        Products:
      </Text>
      <Flex gap={6}>
        <Button>Add Product</Button>
        <Button variant='outline'>Sort by</Button>
      </Flex>
    </Flex>
  );
};
