"use client";
import React from "react";
import ModalTasks from "../../components/Core/ModalTasks";
import * as S from "./styles";
import { AddCircleIcon } from "@/app/utils/icons";
import { Button, Divider } from "@mui/material";
import { useGlobalState } from "@/app/hooks";
import GenericModal from "@/app/components/Core/GenericModal";
import NewMetricForm from "@/app/components/Forms/NewMetricForm";

const Analitics = () => {
  const { setOpenCloseModal } = useGlobalState();
  return (
    <ModalTasks>
      <S.GridContainer>
        <S.GridItem>Análises planejadas</S.GridItem>

        <S.GridItem textAlign="end">
          <Button
            onClick={() => setOpenCloseModal(true)}
            startIcon={
              <AddCircleIcon style={{ marginBottom: 2 }} fontSize="large" />
            }
          >
            Nova análise
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

export default Analitics;
