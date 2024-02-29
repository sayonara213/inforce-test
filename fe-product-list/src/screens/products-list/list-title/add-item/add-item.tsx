import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { ItemForm } from '../../../../components/item-form/item-form';

export const AddItem = () => {
  const [isOpened, { open, close }] = useDisclosure();

  return (
    <>
      <Modal opened={isOpened} onClose={close} title='Add product'>
        <ItemForm close={close} />
      </Modal>

      <Button onClick={open}>Add Product</Button>
    </>
  );
};
