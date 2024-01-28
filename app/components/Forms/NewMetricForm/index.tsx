import React from "react";
import * as S from "./styles";
import { Button, Divider } from "@mui/material";
import { InsightsIcon } from "@/app/utils/icons";
import { useForm } from "react-hook-form";
import axios from "axios";

const NewMetricForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    const x = {
      nomeMetrica: data.nomeMetrica,
      dataInicialMeta: new Date(data.dataInicialMeta),
      dataFinalMeta: new Date(data.dataFinalMeta),
    };
    const teste = await axios.post("/api/metrics", x);
  };

  return (
    <S.ModalForm>
      <S.GridContainer>
        <S.GridItem md={12}>
          <InsightsIcon fontSize="large" style={{ fontSize: "70px" }} />
        </S.GridItem>

        <S.GridItem md={12}>Adicione uma nova meta aqui</S.GridItem>
      </S.GridContainer>

      <S.GridItemDivider>
        <Divider color="white" variant="fullWidth" />
      </S.GridItemDivider>

      <form id="metricForm" onSubmit={handleSubmit(onSubmit)}>
        <S.GridContainer spacing={3}>
          <S.GridItem md={12}>
            <S.InputBox>Título da meta</S.InputBox>
            <S.InputForm
              placeholder="Ex: Atingir 98% de vend..."
              {...register("nomeMetrica")}
            />
          </S.GridItem>

          <S.GridItem md={12}>
            <S.InputBox>Data da inicial da Meta</S.InputBox>
            <S.InputForm type="date" {...register("dataInicialMeta")} />
          </S.GridItem>

          <S.GridItem md={12}>
            <S.InputBox>Data final da meta</S.InputBox>
            <S.InputForm type="date" {...register("dataFinalMeta")} />
          </S.GridItem>
        </S.GridContainer>
      </form>

      <S.GridItemDivider>
        <Divider color="white" variant="fullWidth" />
      </S.GridItemDivider>

      <S.GridContainer>
        <S.GridItem md={6}>
          <Button type="submit" form="metricForm">
            Enviar
          </Button>
        </S.GridItem>

        <S.GridItem md={6}>
          <Button type="submit">Cancelar</Button>
        </S.GridItem>
      </S.GridContainer>
    </S.ModalForm>
  );
};

export default NewMetricForm;
