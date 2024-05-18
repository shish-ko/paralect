import { Button, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react"

export const RateModal = () => {
  const [isOpen, {open, close}] = useDisclosure(true);

  return (
    <>
      <Modal opened={isOpen} onClose={close}></Modal>
    </>
  );
};
