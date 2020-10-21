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


export const LeftSlider = () => {

    const [side, setSide] = React.useState(0)
    const $lowerSlide = React.useRef(null)
    const $upperSlide = React.useRef(null)
    const { divPage, page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()

    React.useEffect(() => {

        if (divPage) {
            const div = divPage! as HTMLDivElement
            const divHeight = +div.style.paddingTop.split('px')[0]
            setSide(divHeight)
        }

    }, [divPage])

    const dispatchCallback = (side : string, height : number) => {
        if ( side === 'lower' ) {
            dispatch(PADDING_TOP_ACTION(height))
        }
        else {
            dispatch(PADDING_BOTTOM_ACTION(height))
        }
    }

    return (
        <Box style={{
            position : 'absolute',
            top : 0,
            left : 0,
            height : '100%',
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
                    height : side + page.paddingTop,
                    width : 15,
                    cursor : 'row-resize',
                    zIndex : 5,
                    backgroundColor : '#959595'
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
                    height : side + page.paddingBottom,
                    width : 15,
                    cursor : 'row-resize',
                    backgroundColor : '#959595'
                }}/>
            </RootRef>
        </Box>
    )
}