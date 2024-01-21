import React from "react";
import * as S from "./styles";
import { Button, Divider } from "@mui/material";
import { InsightsIcon } from "@/app/utils/icons";
import { useForm } from "react-hook-form";

const NewMetricForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <S.ModalForm>
      <S.GridContainer>
        <S.GridItem>
          <InsightsIcon fontSize="large" />
        </S.GridItem>

        <S.GridItem>Adicione uma nova métrica aqui</S.GridItem>
      </S.GridContainer>

      <S.GridItemDivider>
        <Divider color="white" variant="fullWidth" />
      </S.GridItemDivider>

      <form onSubmit={handleSubmit(onSubmit)}>
        <S.GridContainer spacing={3}>
          <S.GridItem md={12}>
            <S.InputBox>Título da meta</S.InputBox>
            <S.InputForm
              placeholder="Ex: Atingir 98% de vend..."
              {...register("firstName")}
            />
          </S.GridItem>

          <S.GridItem md={12}>
            <S.InputBox>Data da inicial da Meta</S.InputBox>
            <S.InputForm
              type="date"
              placeholder="99/99/99"
              {...register("dataInicialMeta")}
            />
          </S.GridItem>

          <S.GridItem md={12}>
            <S.InputBox>Data final da meta</S.InputBox>
            <S.InputForm
              placeholder="99/99/99"
              type="date"
              {...register("dataFinalMeta")}
            />
          </S.GridItem>

          <S.GridItem md={12}>
            <S.GridItemDivider>
              <Divider color="white" variant="fullWidth" />
            </S.GridItemDivider>
          </S.GridItem>

          <S.GridItem md={12}>
            <Button type="submit">Enviar</Button>
          </S.GridItem>
        </S.GridContainer>
      </form>
    </S.ModalForm>
  );
};

export default NewMetricForm;
