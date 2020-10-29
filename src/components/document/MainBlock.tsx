import React from "react";
import {Box, RootRef} from "@material-ui/core";
import {Header} from "./mainBlock.components/header/Header";
import {LeftSlider} from "./mainBlock.components/LeftSlider/LeftSlider";
import {Page} from "./mainBlock.components/page/Page";
import {useDispatch} from "react-redux";
import {SET_PAGE_DOM_ACTION} from "../../redux/documentRecuder/docAction";

export const MainBlock = () => {

    const pageDom = React.useRef(null)
    const dispatch = useDispatch()

    React.useEffect(() => {

        const $pageDom = pageDom.current! as HTMLDivElement
        dispatch(SET_PAGE_DOM_ACTION($pageDom))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageDom])


    return (<>

        <Header />

        <RootRef rootRef={pageDom}>
            <Box
                style={{
                    position : 'absolute',
                    top : '130px',
                    width : '100%',
                    maxWidth : '1920px',
                    paddingTop : '30px',
                    paddingBottom : '30px',
                    backgroundColor :'rgb(255,255,255)',
                    borderBottom : '1px solid #000',
                }}
            >
               <LeftSlider />
               <Page />
            </Box>
        </RootRef>
    </>)
}