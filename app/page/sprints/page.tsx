"use client";
import React from "react";
import ModalTasks from "../../components/Core/ModalTasks";
import * as S from "./styles";
import { useGlobalState } from "@/app/hooks";
import { Button, Divider } from "@mui/material";
import { AddCircleIcon } from "@/app/utils/icons";
import GenericModal from "@/app/components/Core/GenericModal";
import NewMetricForm from "@/app/components/Forms/NewMetricForm";

const Sprints = () => {
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
            Nova Sprint
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

export default Sprints;
