import React from "react";
import * as S from "./style";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/app/hooks";
import { addHomeIcon } from "@/app/utils/icons";
import { coreTabItems } from "@/app/utils/coreTabItems";

const CoreTabs = () => {
  const { chosedMenuButton, setChosedMenuButton } = useGlobalState();

  const router = useRouter();

  const handleChosedMenuItem = (index: number, menupage: string) => {
    setChosedMenuButton(index);
    router.push(menupage);
  };

  return (
    <S.GridContainer textAlign="start">
      {coreTabItems?.map((menu, index) => (
        <S.GridItem key={index}>
          <Button
            fullWidth
            startIcon={addHomeIcon}
            style={{
              color: "whitesmoke",
              justifyContent: "flex-start",
              border:
                chosedMenuButton === index
                  ? "1px solid green"
                  : "1px solid whitesmoke",
              borderRight:
                chosedMenuButton === index
                  ? "5px solid green"
                  : "1px solid whitesmoke",
            }}
            onClick={() => handleChosedMenuItem(index, menu.pageLink)}
          >
            {menu.title}
          </Button>
        </S.GridItem>
      ))}
    </S.GridContainer>
  );
};

export default CoreTabs;
