import { Grid } from "@mui/material";
import styled from "styled-components";

export const GridContainer = styled.div`
  width: 80vw;
  height: 100%;
  position: relative;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
`;

export const GridItem = styled(Grid).attrs({
  xs: 12,
  item: true,
})`
  background-color: #212121;
`;
