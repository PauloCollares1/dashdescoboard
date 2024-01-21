import { Grid } from "@mui/material";
import styled from "styled-components";

export const GridContainer = styled(Grid).attrs({
  container: true,
  padding: "15px",
  textAlign: "center",
})``;

export const GridItem = styled(Grid).attrs({
  item: true,
})``;

export const GridItemDivider = styled.div``;

export const ModalForm = styled.div`
  max-width: 60%;
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
  margin-bottom: 0%;
  border-radius: 1rem;
  background-color: #212121;
`;

export const InputBox = styled.div``;

export const InputForm = styled.input`
  color: black;
  border-radius: 5px;
  padding: 5px;
  min-width: 250px;
`;
