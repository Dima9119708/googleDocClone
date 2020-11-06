import React from "react";
import {Box, RootRef} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../../../../redux/store";
import {
    handleMouseLeftSlide,
    handleMouseRightSlide
} from "./leftSlider.fuction";
import {
    PADDING_TOP_ACTION,
    PADDING_BOTTOM_ACTION
} from "../../../../redux/documentRecuder/docAction";
import {paddingBottom, paddingTop} from "../../MainBlock";


export const LeftSlider = () => {

    const $lowerSlide = React.useRef(null)
    const $upperSlide = React.useRef(null)
    const { divPage, page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()

    const dispatchCallback = (side : string, height : number) => {
        if ( side === 'lower' ) dispatch(PADDING_TOP_ACTION(height))
        else dispatch(PADDING_BOTTOM_ACTION(height))
    }

    return (
        <Box style={{
            position : 'absolute',
            top : -paddingTop,
            left : 0,
            bottom : -paddingBottom,
            width : 15,
            backgroundColor : '#ffffff',
            borderRight : '1px solid gray'
        }}>

            <RootRef rootRef={$upperSlide}>
                <Box
                    onMouseDown={ e => handleMouseLeftSlide(e, $lowerSlide, divPage, dispatchCallback )}
                    style={{
                        position : "absolute",
                        left : 0,
                        top : 0,
                        height : paddingTop + page.paddingTop,
                        width : 15,
                        cursor : 'row-resize',
                        zIndex : 5,
                        backgroundColor : '#aeaeae'
                    }}
                />
            </RootRef>

            <RootRef rootRef={$lowerSlide}>
                <Box
                    onMouseDown={ e => handleMouseRightSlide(e, $upperSlide, divPage, dispatchCallback)}
                    style={{
                        position : "absolute",
                        bottom : 0,
                        left : 0,
                        height : paddingBottom + page.paddingBottom,
                        width : 15,
                        cursor : 'row-resize',
                        backgroundColor : '#aeaeae'
                }}/>
            </RootRef>
        </Box>
    )
}