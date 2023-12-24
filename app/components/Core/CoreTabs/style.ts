import { Button, Grid } from "@mui/material";
import styled from "styled-components";

export const GridContainer = styled(Grid).attrs({
  container: true,
  padding: "5px",
})``;

export const GridItem = styled(Grid).attrs({
  xs: 12,
  item: true,
  marginBottom: "1rem",
})``;
