import { Grid } from "@mui/material";
import styled from "styled-components";

export const GridContainer = styled(Grid).attrs({
  container: true,
  padding: "15px",
})``;

export const GridItem = styled(Grid).attrs({
  md: 6,
  xs: 12,
  item: true,
})``;

export const GridItemDivider = styled.div``;
