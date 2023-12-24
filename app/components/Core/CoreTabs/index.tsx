import { Button } from "@mui/material";
import React, { useState } from "react";
import * as S from "./style";
import { coreTabItems } from "@/app/utils/coreTabItems";
import { Brightness1Icon } from "@/app/utils/icons";
import { useGlobalState } from "@/app/hooks";
import { BorderRight } from "@mui/icons-material";

const CoreTabs = () => {
  const { chosedMenuButton, setChosedMenuButton } = useGlobalState();

  return (
    <S.GridContainer textAlign="start">
      {coreTabItems?.map((menu, index) => (
        <S.GridItem key={index}>
          <Button
            fullWidth
            startIcon={
              <Brightness1Icon
                color={chosedMenuButton === index ? "success" : undefined}
                style={{ marginRight: "2rem" }}
              />
            }
            style={{
              color: "whitesmoke",
              border:
                chosedMenuButton === index
                  ? "1px solid green"
                  : "1px solid whitesmoke",
              justifyContent: "flex-start",
              borderRight:
                chosedMenuButton === index
                  ? "5px solid green"
                  : "1px solid whitesmoke",
            }}
            onClick={() => setChosedMenuButton(index)}
          >
            {menu.title}
          </Button>
        </S.GridItem>
      ))}
    </S.GridContainer>
  );
};

export default CoreTabs;
