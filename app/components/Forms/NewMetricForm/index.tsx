import React from "react";
import * as S from "./styles";
import { Button, Divider, TextField } from "@mui/material";

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
        <S.GridContainer>
          <S.GridItem md={6}>
            <TextField
              label="Outlined"
              variant="outlined"
              size="small"
              {...register("firstName")}
            />
          </S.GridItem>

          <S.GridItem md={6}>
            <TextField label="Outlined" variant="outlined" size="small" />
          </S.GridItem>

          <S.GridItem md={6}>
            <TextField label="Outlined" variant="outlined" size="small" />
          </S.GridItem>

          <S.GridItem md={6}>
            <TextField label="Outlined" variant="outlined" size="small" />
          </S.GridItem>

          <S.GridItem>
            <Button type="submit">Enviar</Button>
          </S.GridItem>
        </S.GridContainer>
      </form>

      <S.GridItemDivider>
        <Divider color="white" variant="fullWidth" />
      </S.GridItemDivider>
    </S.ModalForm>
  );
};

export default NewMetricForm;
