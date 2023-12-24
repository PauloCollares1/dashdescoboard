import { Grid } from "@mui/material";
import styled from "styled-components";

export const GridContainer = styled(Grid).attrs({
  container: true,
  marginTop: "2.5rem",
})``;

export const GridItem = styled(Grid).attrs({
  xs: 12,
  item: true,
  marginTop: "1rem",
  marginBottom: "1rem",
})``;

export const GridItem2 = styled(Grid).attrs({
  xs: 2,
  item: true,
})``;
