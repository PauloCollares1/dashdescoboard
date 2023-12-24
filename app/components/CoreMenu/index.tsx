"use client";
import React from "react";
import * as S from "./style";
import MenuAvatar from "../Avatar";
import { Grid } from "@mui/material";
import { useGlobalState } from "@/app/hooks/index";

const CoreMenu = () => {
  const { theme } = useGlobalState();

  return (
    <S.StyledNavbar theme={theme}>
      <S.GridContainer>
        <S.GridItem item xs={12}>
          <MenuAvatar avatarName="Paulo" AvatarPic="../../favicon.ico" />
        </S.GridItem>
      </S.GridContainer>
    </S.StyledNavbar>
  );
};

export default CoreMenu;
