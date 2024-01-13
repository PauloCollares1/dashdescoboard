"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { GlobalProvider } from "../context/globalProvider";

interface Iprops {
  children: ReactNode;
}

const ContextProvider = ({ children }: Iprops) => {
  const [loadContex, setLoadContex] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadContex(true);
    }, 200);
  }, []);

  if (!loadContex) return null;

  return <GlobalProvider>{children}</GlobalProvider>;
};

export default ContextProvider;
