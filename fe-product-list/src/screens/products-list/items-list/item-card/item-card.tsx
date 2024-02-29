import React from 'react';
import { IProduct } from '../../../../types/product.types';
import { Badge, Card, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import styles from './item-card.module.scss';

interface ItemCardProps {
  product: IProduct;
}

export const ItemCard: React.FC<ItemCardProps> = ({ product }) => {
  return (
    <Card shadow='sm' padding={'lg'} radius={'sm'} withBorder>
      <Card.Section style={{ overflow: 'hidden' }}>
        <Link to={`/product/${product.id}`}>
          <Image src={product.imageUrl} height={300} alt='Product image' className={styles.image} />
        </Link>
      </Card.Section>
      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>{product.name}</Text>
        <Badge color='pink'>{product.count}</Badge>
      </Group>
      <Text size='sm' c='dimmed'>
        weight: {product.weight}g
      </Text>
    </Card>
  );
};
