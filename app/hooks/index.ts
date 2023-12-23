'use client';
import  {useContext} from "react";
import {GlobalContext, GlobalUpdateContext} from '@/app/context/globalProvider';

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext)


