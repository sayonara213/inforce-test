import React from 'react';
import { ICreateProduct, IProduct } from '../../types/product.types';
import { useForm, zodResolver } from '@mantine/form';
import { Box, Button, Flex, Group, NumberInput, TextInput } from '@mantine/core';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { schema } from './validation';
import { addProduct } from '../../redux/products.slice';
import { useAddProductMutation } from '../../redux/services/products.api';

interface ItemFormProps {
  product?: IProduct;
  close: () => void;
}

export const ItemForm: React.FC<ItemFormProps> = ({ product, close }) => {
  const dispatch = useAppDispatch();
  const [serverAddProduct, { isLoading, isSuccess, isError, error }] = useAddProductMutation();

  const initialValues: ICreateProduct = {
    name: (product && product.name) || '',
    weight: (product && product.weight) || 0,
    count: (product && product.count) || 0,
    imageUrl: (product && product.imageUrl) || '',
  };

  const form = useForm({
    initialValues,
    validate: zodResolver(schema),
  });

  const handleAddProductOptimistic = async (values: ICreateProduct) => {
    try {
      await serverAddProduct(values);
      dispatch(addProduct({ ...values }));
      close();
    } catch {
      console.log('Error');
    }
  };

  const handleSubmit = (values: ICreateProduct) => {
    handleAddProductOptimistic(values);
  };

  return (
    <Box maw={340} mx={'auto'}>
      <form onSubmit={form.onSubmit((data) => handleSubmit(data))}>
        <TextInput label='Name' placeholder='Product name' {...form.getInputProps('name')} />
        <TextInput label='Image' placeholder='Image Url' {...form.getInputProps('imageUrl')} />
        <NumberInput label='Count' {...form.getInputProps('count')} />
        <NumberInput label='Weight' {...form.getInputProps('weight')} />

        <Group justify='space-between' mt='md'>
          <Button variant='subtle'>Cancel</Button>
          <Button type='submit' loading={isLoading}>
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};
