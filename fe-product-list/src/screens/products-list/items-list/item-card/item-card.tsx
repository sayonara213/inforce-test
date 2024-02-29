import React from 'react';
import { IProduct } from '../../../../types/product.types';
import { ActionIcon, Badge, Card, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import styles from './item-card.module.scss';
import { IconTrash } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { ConfirmationModal } from '../../../../components/confirmation-modal/confirmation-modal';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { removeProduct } from '../../../../redux/products.slice';

interface ItemCardProps {
  product: IProduct;
  deleteProduct: (id: string) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ product, deleteProduct }) => {
  const [opened, { open, close }] = useDisclosure();
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    try {
      deleteProduct(product.id);
      dispatch(removeProduct(product.id));
      close();
    } catch {
      console.log('Error');
    }
  };

  return (
    <>
      <ConfirmationModal
        opened={opened}
        onClose={close}
        onConfirm={handleDelete}
        title='Delete Product'
        description='Are you sure you want to delete this product'
      />
      <Card shadow='sm' padding={'lg'} radius={'sm'} withBorder>
        <Card.Section style={{ overflow: 'hidden', position: 'relative' }}>
          <Link to={`/product/${product.id}`}>
            <Image
              src={product.imageUrl}
              height={300}
              alt='Product image'
              className={styles.image}
            />
          </Link>
          <div className={styles.actions}>
            <ActionIcon onClick={open}>
              <IconTrash size={20} />
            </ActionIcon>
          </div>
        </Card.Section>
        <Group justify='space-between' mt='md' mb='xs'>
          <Text fw={500}>{product.name}</Text>
          <Badge color='pink'>{product.count}</Badge>
        </Group>
        <Text size='sm' c='dimmed'>
          weight: {product.weight}g
        </Text>
      </Card>
    </>
  );
};
