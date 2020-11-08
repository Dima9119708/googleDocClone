import React from "react";
import SimpleBar from 'simplebar-react';
import {RootRef} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {Header} from "./mainBlock.components/header/Header";
import {LeftSlider} from "./mainBlock.components/LeftSlider/LeftSlider";
import {Page} from "./mainBlock.components/page/Page";
import {SET_PAGE_DOM_ACTION} from "../../redux/documentRecuder/docAction";

export const paddingTop = 30
export const paddingBottom = 30

export const MainBlock = () => {

    const pageDom = React.useRef(null)
    const dispatch = useDispatch()

    React.useEffect(() => {

        const $pageDom = pageDom.current! as HTMLDivElement
        dispatch(SET_PAGE_DOM_ACTION($pageDom))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageDom])

   //
    return (<>

            <Header />

            <SimpleBar
                    autoHide={false}
                    style={{
                        maxHeight : '80vh',
                        paddingTop,
                        paddingBottom,
                        backgroundColor : '#F8F9FA'
                    }}>

                    <div style={{position : 'relative'}}>

                        <LeftSlider />
                        <RootRef rootRef={pageDom} >
                            <Page />
                        </RootRef>

                    </div>

            </SimpleBar>
    </>)
}