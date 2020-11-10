import React from "react";
import {Box} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../../../../redux/store";
import {
    PADDING_LEFT_ACTION,
    PADDING_RIGHT_ACTION
} from "../../../../redux/documentRecuder/docAction";
import { handleMouseLeftSlide, handleMouseRightSlide } from "./header.funtion";
import {widthPage} from "../page/Page";

export const Header = () => {

    const { page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const rightSlide = React.useRef(null)
    const leftSlide = React.useRef(null)
    const dispatch = useDispatch()

    const dispatchCallback = (side : string, width : number) => {
        if(side === 'left') dispatch(PADDING_LEFT_ACTION(width))
        else dispatch(PADDING_RIGHT_ACTION(width))
    }

    return (
        <Box style={{
            height : 15,
            backgroundColor : '#e1e1e1',
            borderBottom : '1px solid #000',
            borderTop : '1px solid #000',
        }}>
            <div
                style={{
                    display : "flex",
                    justifyContent : 'space-between',
                    position: "relative",
                    height : '100%',
                    width : widthPage,
                    margin : '0 auto',
                    backgroundColor : '#ffffff'
                }}
            >
                <Box
                    style={{
                        position: "relative",
                        display : 'inline-block'
                    }}
                >
                    <div
                        ref={leftSlide}
                        onMouseDown={e => handleMouseLeftSlide(e, rightSlide, dispatchCallback)}
                        style={{
                            height : '100%',
                            width : page.paddingLeft,
                            cursor : 'col-resize',
                            backgroundColor : '#aeaeae'
                        }}
                    >
                    </div>

                </Box>

                <Box style={{
                        position: "relative",
                        display : 'inline-block'
                    }}
                >
                    <div
                        ref={rightSlide}
                        onMouseDown={e => handleMouseRightSlide(e, leftSlide, dispatchCallback)}
                        style={{
                            position : "absolute",
                            right : 0,
                            top : 0,
                            height : '100%',
                            width : page.paddingRight,
                            cursor : 'col-resize',
                            backgroundColor : '#aeaeae'
                        }}
                    />
                </Box>
            </div>
        </Box>
    )
}