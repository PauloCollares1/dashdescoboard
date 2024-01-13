"use client";
import * as S from "./styles";
import React, { ReactNode } from "react";
import { useGlobalState } from "@/app/hooks";

interface Iprops {
  children?: ReactNode;
}

const ModalTasks = ({ children }: Iprops) => {
  const { theme } = useGlobalState();

  return (
    <S.GridContainer theme={theme}>
      <S.GridItem>{children}</S.GridItem>
    </S.GridContainer>
  );
};

export default ModalTasks;
