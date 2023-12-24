import { Button } from "@mui/material";
import React, { useState } from "react";
import * as S from "./style";
import { coreTabItems } from "@/app/utils/coreTabItems";
import { Brightness1Icon } from "@/app/utils/icons";

const CoreTabs = () => {
  const [apertado, setApertado] = useState(false);

  return (
    <S.GridContainer textAlign="start">
      {coreTabItems?.map((menu, index) => (
        <S.GridItem key={index}>
          <Button
            fullWidth
            startIcon={
              <Brightness1Icon
                color="success"
                style={{ marginRight: "2rem" }}
              />
            }
            style={{
              color: "whitesmoke",
              border: "1px solid green",
              justifyContent: "flex-start",
              borderRight: "5px solid green",
            }}
          >
            {menu.title}
          </Button>
        </S.GridItem>
      ))}
    </S.GridContainer>
  );
};

export default CoreTabs;
