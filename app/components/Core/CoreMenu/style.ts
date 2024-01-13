import { Grid } from "@mui/material";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: relative;
  border-radius: 1rem;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
`;

export const GridContainer = styled(Grid).attrs({
  container: true,
})``;

export const GridItem = styled(Grid).attrs({
  xs: 12,
  item: true,
})``;
