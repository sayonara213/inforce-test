import React, { useState } from 'react';
import { IProduct } from '../../../types/product.types';
import { ActionIcon, Flex, Group, Image, Modal, Skeleton, Text } from '@mantine/core';

import styles from './product-info.module.scss';
import { IconEdit } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { ItemForm } from '../../../components/item-form/item-form';

interface ProductInfoProps {
  product: IProduct;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [opened, { open, close }] = useDisclosure();
  const [productState, setProductState] = useState<IProduct>(product);

  const updateProduct = (product: IProduct) => {
    setProductState(product);
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title='Edit product'>
        <ItemForm product={productState} close={close} updateProduct={updateProduct} />
      </Modal>
      <div className={styles.wrapper}>
        <Image src={productState.imageUrl} radius={12} maw={300} mah={300} />
        <Flex justify={'space-between'} gap={12} align={'center'}>
          <Text fw={'bold'} size='xl'>
            {productState.name}
          </Text>
          <ActionIcon onClick={open}>
            <IconEdit size={20} />
          </ActionIcon>
        </Flex>
        <Group>
          <Text>Count: {productState.count}</Text>
          <Text>Weight: {productState.weight}</Text>
        </Group>
      </div>
    </>
  );
};

export const ProductInfoSkeleton = () => {
  return <Skeleton width={'100%'} height={300} />;
};
