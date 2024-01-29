"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Divider } from "@mui/material";
import { useGlobalState } from "@/app/hooks";
import ModalTasks from "@/app/components/Core/ModalTasks";
import GenericModal from "@/app/components/Core/GenericModal";
import * as S from "./styles";
import { AddCircleIcon } from "@/app/utils/icons";
import NewMetricForm from "@/app/components/Forms/NewMetricForm";
import axios from "axios";

const Goals = () => {
  const [post, setPost] = useState([]);

  const doido = async () => {
    const x = await axios.get("/api/metrics").then((response) => {
      setPost(response.data);
    });
    return x;
  };

  useEffect(() => {
    doido();
  }, []);

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

      <div>aaaaaaaaaaa</div>

      {post.map((item: any, index: any) => {
        return (
          <div key={index}>
            <span>{item.nomeMetrica}</span>
          </div>
        );
      })}
    </ModalTasks>
  );
};

export default Goals;
