import React, {FunctionComponent} from "react";
import SimpleBar from "simplebar-react";
import {Box } from "@material-ui/core";
import {Header} from "../components/home/Header";
import {AddDoc} from "../components/home/Add_Doc";
import {PanelSort} from "../components/home/Panel_Sort";
import {AllDocList} from "../components/home/All_Doc_List";
import { authInApp } from "../components/home/auth";
import {useDispatch, useSelector} from "react-redux";
import {homeReducerTYPE} from "../redux/store";
import {Preloader} from "../components/home/Preloader";


export const Home : FunctionComponent = () => {

    const dispatch = useDispatch()
    const userData = useSelector(({homeReducer} : homeReducerTYPE) => homeReducer.dataUser)

    React.useEffect( authInApp.bind(null, dispatch), [])


    if (!userData) {
        return (
            <Box style={{ pointerEvents : 'none'}}>

                <Header />

                <AddDoc />

                <Box style={{ position: "relative", minHeight : '200px'}}>
                    <Preloader height="50px" width="50px"/>
                </Box>

            </Box>
        )
    }

    return (
        <>
            <SimpleBar style={{ maxHeight : '100vh' }}>

                <Header />

                <AddDoc />

                <PanelSort />

                <AllDocList />

            </SimpleBar>
        </>
    )
}