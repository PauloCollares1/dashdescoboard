"use client";

import React, { ReactNode, createContext, useState } from "react";
import { themes } from "./themes";



export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedThemes] = useState(0);
  const [chosedMenuButton, setChosedMenuButton] = useState(0)

  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider value = {{theme, chosedMenuButton, setChosedMenuButton}}>
      <GlobalUpdateContext.Provider value={{}}>{children}</GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};
