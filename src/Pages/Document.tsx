import React from "react";
import {Header} from "../components/document/Header";
import { Toolbar } from "../components/document/Toolbar";
import {MainBlock} from "../components/document/MainBlock";

export const Document = () => {

    return (
        <>
         <Header />
         <Toolbar />
         <MainBlock />
      </>
    )
}