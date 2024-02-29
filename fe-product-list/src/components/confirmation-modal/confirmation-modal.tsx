import { Button, Flex, Modal, Text } from '@mantine/core';
import React from 'react';

interface ConfirmationModalProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onClose: () => void;
  opened: boolean;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  description,
  onClose,
  onConfirm,
  opened,
}) => {
  return (
    <Modal title={title} onClose={onClose} opened={opened}>
      <Flex direction={'column'} gap={12}>
        <Text>{description}</Text>
        <Flex justify={'space-between'} gap={12}>
          <Button variant='outline' onClick={onClose} fullWidth>
            Cancel
          </Button>
          <Button onClick={onConfirm} fullWidth>
            Confirm
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};
