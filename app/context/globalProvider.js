"use client";
import { themes } from "./themes";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme] = useState(0);
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const [chosedMenuButton, setChosedMenuButton] = useState(0);

  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider value = {{theme, openCloseModal, chosedMenuButton, setChosedMenuButton, setOpenCloseModal}}>
      <GlobalUpdateContext.Provider value={{}}>{children}</GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};
