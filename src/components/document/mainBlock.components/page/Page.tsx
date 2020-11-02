import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    IMAGE_ACTION,
    LINK_PRINT_DOM_ACTION, TARGET_NODE_ACTION,
} from "../../../../redux/documentRecuder/docAction";
import {docReducerTYPE} from "../../../../redux/store";
import {defaultPageStyle} from "../../../../redux/documentRecuder/docReducer";
import {checkNodeImageOrNot, formatGetFontFamily, resizeImage} from "./page.functions";
import {RANGE_ACTION} from "../../../../redux/homeReducer/homeAction";
import { emitter } from "../../../../Emitter/emitter";



export const widthPage = 800

const { fontFamily } = defaultPageStyle

// @ts-ignore
export let $stylesElem : [{comand : string, value : string}] = []

export const Page = () => {

    const { page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const $divContent = React.useRef<HTMLDivElement>(null)
    const [pageDiv, setPageDiv] = React.useState<HTMLDivElement | null>(null)
    const dispatch = useDispatch()


    React.useEffect(() => {

        const div = $divContent.current!.children[0] as HTMLDivElement
        div.focus()

        const range = document.getSelection()!.getRangeAt(0)

        dispatch(LINK_PRINT_DOM_ACTION($divContent.current!))
        dispatch(RANGE_ACTION(range))
        dispatch(TARGET_NODE_ACTION(div))

        setPageDiv(div)

        document.execCommand('styleWithCSS', false, 'true')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleInput = (e : React.FormEvent<HTMLDivElement>) => {
        // @ts-ignore
        $stylesElem = []

        //const page = $divContent.current!.children[0].innerHTML
        //console.log(page)
    }


    const handleKey = (e : React.KeyboardEvent) => {
        if(e.key === 'Delete') {
            const currentImage = pageDiv?.querySelector('.activeImage')
            if(currentImage) currentImage.remove()
        }
    }


    const handleSelectText = () => {
        const value = document.getSelection()!.toString()

        if (value) {
            const range = document.getSelection()!.getRangeAt(0)
            dispatch(RANGE_ACTION(range))
        }
    }


    const handleClickSelectRange = () => {
        const selection = document.getSelection()!

        if (selection.anchorNode) {
            const range = document.getSelection()!.getRangeAt(0)
            dispatch(RANGE_ACTION(range))
        }
    }


    const handleMouse = (e : React.MouseEvent) => {

        // @ts-ignore
        $stylesElem = []

        const target = e.target as HTMLDivElement
        const styles = window.getComputedStyle(target) as any

        const getFontSize = styles.fontSize.split('px')[0]
        const getFontFamily = formatGetFontFamily(styles.fontFamily)
        const getColor = styles.color
        const getBG = styles.backgroundColor


        const image = checkNodeImageOrNot(target, pageDiv)
        dispatch(IMAGE_ACTION(image))

        resizeImage(target)
        dispatch(TARGET_NODE_ACTION(target))


        const imageMarginLeft = +styles.marginLeft.split('px')[0]
        const imageMarginRight = +styles.marginRight.split('px')[0]

        if(imageMarginLeft > imageMarginRight) {
            emitter.emit('IMAGE__SIDE', 'right')
        }
        else if (imageMarginRight > imageMarginLeft) {
            emitter.emit('IMAGE__SIDE', 'left')
        }
        else if (imageMarginRight === imageMarginLeft) {
            emitter.emit('IMAGE__SIDE', 'center')
        }

        emitter.emit('FLOAT', styles.float)
        emitter.emit('FONT_SIZE', getFontSize)
        emitter.emit('FONT_WEIGHT', styles.fontWeight)
        emitter.emit('FONT_STYLE', styles.fontStyle)
        emitter.emit('TEXT_DECORATION', styles.webkitTextDecorationsInEffect)
        emitter.emit('FONT_FAMILY', getFontFamily)
        emitter.emit('COLOR', getColor)
        emitter.emit('BACKGROUND_COLOR', getBG)
        emitter.emit('TEXT_ALIGN', styles.textAlign === 'start' ? 'left' : styles.textAlign)
    }


    return (
            <div
                ref={$divContent}
                style={{
                    minHeight : page.minHeight,
                    width : page.width,
                    margin : '0 auto',
                    paddingTop : page.paddingTop,
                    paddingBottom : page.paddingBottom,
                    paddingRight : page.paddingRight,
                    paddingLeft : page.paddingLeft,
                    fontFamily : fontFamily + ',sans-serif',
                    letterSpacing: '0.5px',
                    lineHeight : page.lineHeight,
                    backgroundColor : '#ffffff',
                    overflow : 'hidden',
                    boxShadow: 'rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                }}
            >
                    <div
                        onMouseDown={handleMouse}
                        onSelect={handleSelectText}
                        onClick={handleClickSelectRange}
                        onKeyDown={handleKey}
                        onInput={handleInput}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        style={{fontSize: '16'}}
                        className="page"
                    >

                    </div>
            </div>
    )
}