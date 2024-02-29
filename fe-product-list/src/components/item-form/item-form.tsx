import React from 'react';
import { ICreateProduct, IProduct } from '../../types/product.types';
import { useForm, zodResolver } from '@mantine/form';
import { Box, Button, Flex, Group, NumberInput, TextInput } from '@mantine/core';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { schema } from './validation';
import { addProduct } from '../../redux/products.slice';
import { useAddProductMutation, useUpdateProductMutation } from '../../redux/services/products.api';

interface ItemFormProps {
  product?: IProduct;
  updateProduct?: (product: IProduct) => void;
  close: () => void;
}

export const ItemForm: React.FC<ItemFormProps> = ({ product, close, updateProduct }) => {
  const dispatch = useAppDispatch();
  const [serverAddProduct, { isLoading, isSuccess, isError, error }] = useAddProductMutation();
  const [serverUpdateProduct] = useUpdateProductMutation();

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

  const handleUpdateProductOptimistic = async (product: IProduct, values: ICreateProduct) => {
    try {
      await serverUpdateProduct({ id: product.id, data: values });
      updateProduct && updateProduct({ ...values, id: product.id, comments: product?.comments });
      close();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (values: ICreateProduct) => {
    product ? handleUpdateProductOptimistic(product, values) : handleAddProductOptimistic(values);
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
