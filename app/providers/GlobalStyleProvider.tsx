"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface Iprops {
  children: ReactNode;
}

const GoblalStyle = styled.div`
  display: flex;
  gap: 2rem;
  height: 100vh;
  padding: 2.5rem;
  border: solid red 1px;
`;

const GlobalStyleProvider = ({ children }: Iprops) => {
  return <GoblalStyle>{children}</GoblalStyle>;
};

export default GlobalStyleProvider;
