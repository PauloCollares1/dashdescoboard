"use client";
import React from "react";
import { Button, Divider } from "@mui/material";
import { useGlobalState } from "@/app/hooks";
import ModalTasks from "@/app/components/Core/ModalTasks";
import GenericModal from "@/app/components/Core/GenericModal";
import * as S from "./styles";
import { AddCircleIcon } from "@/app/utils/icons";
import NewMetricForm from "@/app/components/Forms/NewMetricForm";

const Goals = () => {
  const { setOpenCloseModal } = useGlobalState();
  return (
    <ModalTasks>
      <S.GridContainer>
        <S.GridItem>Métricas planejadas</S.GridItem>

        <S.GridItem textAlign="end">
          <Button
            onClick={() => setOpenCloseModal(true)}
            startIcon={
              <AddCircleIcon style={{ marginBottom: 2 }} fontSize="large" />
            }
          >
            Nova métrica
          </Button>
        </S.GridItem>
      </S.GridContainer>

      <S.GridItemDivider>
        <Divider color="white" variant="fullWidth" />
      </S.GridItemDivider>

      <GenericModal>
        <NewMetricForm />
      </GenericModal>
    </ModalTasks>
  );
};

export default Goals;
