"use client";
import React from "react";
// import { useGlobalState } from "@/app/context/globalProvider";

import { useGlobalState } from "@/app/context/globalProvider";
import styled from "styled-components";

const Sidebar = () => {
  const { theme } = useGlobalState();

  console.log("theme");
  console.log(theme);

  return <StyledNavbar theme={theme}>sidebar</StyledNavbar>;
};

const StyledNavbar = styled.nav`
  position: relative;
  border-radius: 1rem;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
`;

export default Sidebar;
