"use client";
import React from "react";
import { Button } from "@mui/material";
import { useGlobalState } from "@/app/hooks";
import ModalTasks from "@/app/components/Core/ModalTasks";
import GenericModal from "@/app/components/Core/GenericModal";

const Goals = () => {
  const { openCloseModal, setOpenCloseModal } = useGlobalState();
  return (
    <ModalTasks>
      Metas....
      <div>
        <Button onClick={() => setOpenCloseModal(true)}>+ Meta</Button>
        <GenericModal>
          <div>oi</div>
        </GenericModal>
      </div>
    </ModalTasks>
  );
};

export default Goals;
