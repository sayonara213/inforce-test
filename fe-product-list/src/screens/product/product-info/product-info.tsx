import React from 'react';
import { IProduct } from '../../../types/product.types';
import { ActionIcon, Flex, Group, Image, Skeleton, Text } from '@mantine/core';

import styles from './product-info.module.scss';
import { IconEdit } from '@tabler/icons-react';

interface ProductInfoProps {
  product: IProduct;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={product.imageUrl} radius={12} maw={300} mah={300} />
      <Flex justify={'space-between'} gap={12} align={'center'}>
        <Text fw={'bold'} size='xl'>
          {product.name}
        </Text>
        <ActionIcon>
          <IconEdit size={20} />
        </ActionIcon>
      </Flex>
      <Group>
        <Text>Count: {product.count}</Text>
        <Text>Weight: {product.weight}</Text>
      </Group>
    </div>
  );
};

export const ProductInfoSkeleton = () => {
  return <Skeleton width={'100%'} height={300} />;
};
