import React, {FunctionComponent} from "react";
import {Container} from "@material-ui/core";
import {Header} from "../components/home/Header";
import {AddDoc} from "../components/home/Add_Doc";
import {PanelSort} from "../components/home/Panel_Sort";
import {AllDocList} from "../components/home/All_Doc_List";


export const Home : FunctionComponent = () => {

    return (
        <Container
            maxWidth="xl"
            style={{padding : 0}}
        >

            <Header />

            <AddDoc />

            <PanelSort />

            <AllDocList />

        </Container>
    )
}