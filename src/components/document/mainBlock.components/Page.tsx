import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    BACKGROUND_COLOR_ACTION, CHANGE_STYLES_ACTION,
    COLOR_ACTION, FONT_FAMILY_ACTION, FONT_SIZE_ACTION, FONT_STYLE_ACTION, FONT_WEIGHT_ACTION,
    LINK_PRINT_DOM_ACTION, TEXT_ALIGN_ACTION, TEXT_DECORATION_ACTION,
} from "../../../redux/documentRecuder/docAction";
import {docReducerTYPE} from "../../../redux/store";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {formatGetFontFamily} from "./page.functions";
import {RANGE_ACTION} from "../../../redux/homeReducer/homeAction";

const heightPage = 1200
export const widthPage = 800

const { fontFamily } = defaultPageStyle

export const Page = () => {

    const { page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const $divContent = React.useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    const handleInput = (e : React.FormEvent<HTMLDivElement>) => {
        const page = $divContent.current!.children[0].innerHTML

        console.log(page)
    }

    React.useEffect(() => {

        const div = $divContent.current!.children[0] as HTMLDivElement
        div.focus()
        dispatch(LINK_PRINT_DOM_ACTION($divContent.current!))

        document.execCommand('styleWithCSS', false, 'true')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [$divContent])



    const handleSelectText = () => {
        const value = document.getSelection()!.toString()

        if (value) {
            const range = document.getSelection()!.getRangeAt(0)
            dispatch(RANGE_ACTION(range))
        }
    }


    const handleGetStyles = (e : React.MouseEvent) => {
        const target = e.target as HTMLDivElement
        const styles = window.getComputedStyle(target, null) as any

        const getFontSize = styles.fontSize.split('px')[0]
        const getFontFamily = formatGetFontFamily(styles.fontFamily)
        const getColor = styles.color
        const getBG = styles.backgroundColor

        dispatch(CHANGE_STYLES_ACTION( true))

        dispatch(FONT_SIZE_ACTION(getFontSize))
        dispatch(FONT_WEIGHT_ACTION( styles.fontWeight ))
        dispatch(FONT_STYLE_ACTION( styles.fontStyle ))

        dispatch(TEXT_DECORATION_ACTION( styles.webkitTextDecorationsInEffect ))

        dispatch(FONT_FAMILY_ACTION(getFontFamily))

        dispatch(COLOR_ACTION(getColor))
        dispatch(BACKGROUND_COLOR_ACTION(getBG))

        dispatch(TEXT_ALIGN_ACTION(styles.textAlign === 'start'
                                                   ? 'left'
                                                   : styles.textAlign))
    }


    return (
            <div
                ref={$divContent}
                style={{
                    minHeight : heightPage,
                    width : '100%',
                    maxWidth : widthPage,
                    margin : '0 auto',
                    paddingTop : page.paddingTop,
                    paddingBottom : page.paddingBottom,
                    paddingRight : page.paddingRight,
                    paddingLeft : page.paddingLeft,
                    fontFamily : fontFamily + ',sans-serif',
                    letterSpacing: '0.5px',
                    backgroundColor : '#ffffff',
                    wordBreak : 'break-word',
                    boxShadow: 'rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                }}
            >
                    <div
                        onMouseDown={handleGetStyles}
                        onSelect={handleSelectText}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        onInput={handleInput}
                        style={{fontSize: '16'}}
                        className="page"
                    >
                    </div>
            </div>
    )
}