import { Button, Divider, Modal, Rating, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAppSelector } from "helpers/customHooks";
import { useState } from "react";

interface IRateModal {
  isOpen: boolean;
  filmTitle: string;
  closeHandler: ()=>void;
}

export const RateModal: React.FC<IRateModal> = ({isOpen, filmTitle, closeHandler}) => {
  // const [isi, { close }] = useDisclosure(isOpen, {onClose: closeHandler});

  return (
    <>
      <Modal opened={isOpen} onClose={closeHandler} title='Your rating' size={'sm'} centered>
        <Divider />
        <Stack gap={16} py={16}>
          <Text fw={700}>{filmTitle}</Text>
          <Rating value={3} count={10} size={28} styles={{ root: { width: 'inherit', justifyContent: 'space-between' } }} />
          <div>
            <Button mr={10}>Save</Button>
          </div>
        </Stack>
      </Modal>
    </>
  );
};
