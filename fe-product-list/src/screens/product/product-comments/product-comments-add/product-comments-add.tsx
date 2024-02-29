import React from 'react';
import { useAddCommentMutation } from '../../../../redux/services/products.api';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { ActionIcon, Button, Flex, Group, Textarea } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import { useAppDispatch } from '../../../../hooks/reduxHooks';

interface AddCommentProps {
  productId: string;
  addComment: (comment: string) => void;
}

export const AddComment: React.FC<AddCommentProps> = ({ productId, addComment }) => {
  const [serverAddComment, { isError, isLoading, isSuccess }] = useAddCommentMutation();
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      text: '',
    },
    validate: zodResolver(z.object({ text: z.string().min(1) })),
  });

  const handleSubmit = async (text: string) => {
    try {
      await serverAddComment({
        id: productId,
        comment: text,
      });
      addComment(text);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values.text))}>
      <Flex gap={6}>
        <Textarea
          name='Comment'
          placeholder='Describe what you like about the product'
          {...form.getInputProps('text')}
          style={{ width: '100%' }}
        />
        <ActionIcon type='submit'>
          <IconSend size={20} />
        </ActionIcon>
      </Flex>
    </form>
  );
};
