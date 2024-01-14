"use client";
import { useGlobalState } from "@/app/hooks";
import { Button, Modal } from "@mui/material";
import React, { ReactNode, useState } from "react";

interface IGenericModal {
  children?: any;
}

const GenericModal = (props: IGenericModal) => {
  const { children } = props;

  const { openCloseModal, setOpenCloseModal } = useGlobalState();

  return (
    <Modal open={openCloseModal} onClose={() => setOpenCloseModal(false)}>
      {children}
    </Modal>
  );
};

export default GenericModal;
