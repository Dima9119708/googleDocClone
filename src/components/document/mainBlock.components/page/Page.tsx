import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    IMAGE_ACTION,
    LINK_PRINT_DOM_ACTION,
} from "../../../../redux/documentRecuder/docAction";
import {docReducerTYPE} from "../../../../redux/store";
import {defaultPageStyle} from "../../../../redux/documentRecuder/docReducer";
import {checkNodeImageOrNot, formatGetFontFamily, resizeImage, emitterImageMargin} from "./page.functions";
import {RANGE_ACTION} from "../../../../redux/homeReducer/homeAction";
import { emitter } from "../../../../core/emitter";



export const widthPage = 800
export const heightPage = 1200

const { fontFamily } = defaultPageStyle

// @ts-ignore
export const $stylesElem : [{comand : string, value : string}] = []

export const Page = () => {

    const { page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const $divContent = React.useRef<HTMLDivElement>(null)
    const [pageDiv, setPageDiv] = React.useState<HTMLDivElement | null>(null)

    const dispatch = useDispatch()


    React.useEffect(() => {

        const div = $divContent.current!.children[0] as HTMLDivElement
        div.focus()
        div.innerHTML = page.innerHTML
        document.title = page.title

        const range = document.getSelection()!.getRangeAt(0)

        const currentImage = pageDiv?.querySelector('.activeImage')
        if (currentImage) currentImage.classList.remove('activeImage')

        dispatch(LINK_PRINT_DOM_ACTION(div))
        dispatch(RANGE_ACTION(range))

        setPageDiv(div)
        document.execCommand('styleWithCSS', false, 'true')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageDiv])


    const handleInput = (e : React.FormEvent<HTMLDivElement>) => {
        $stylesElem.splice(0, $stylesElem.length)
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

        $stylesElem.splice(0, $stylesElem.length)

        const target = e.target as HTMLDivElement
        const styles = window.getComputedStyle(target) as any

        const getFontSize = styles.fontSize.split('px')[0]
        const getFontFamily = formatGetFontFamily(styles.fontFamily)
        const getColor = styles.color
        const getBG = styles.backgroundColor
        const getTextDecoration = styles.webkitTextDecorationsInEffect?.split(' ') || styles.textDecorationLine.split(' ')


        const image = checkNodeImageOrNot(target, pageDiv)
        dispatch(IMAGE_ACTION(image))


        resizeImage(target)

        emitterImageMargin(styles)
        emitter.emit('LIST', target.parentElement!.localName)
        emitter.emit('FLOAT', styles.float)
        emitter.emit('FONT_SIZE', getFontSize)
        emitter.emit('FONT_WEIGHT', styles.fontWeight)
        emitter.emit('FONT_STYLE', styles.fontStyle)
        emitter.emit('UNDERLINE', getTextDecoration.includes('underline') ? 'underline' : 'none')
        emitter.emit('STRIKETHROUGH', getTextDecoration.includes('line-through') ? 'line-through' : 'none')
        emitter.emit('FONT_FAMILY', getFontFamily)
        emitter.emit('COLOR', getColor)
        emitter.emit('BACKGROUND_COLOR', getBG)
        emitter.emit('TEXT_ALIGN', styles.textAlign === 'start' ? 'left' : styles.textAlign)
    }


    return (
            <div
                ref={$divContent}
                style={{
                    minHeight : heightPage,
                    width : widthPage,
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
                        spellCheck={"false"}
                        suppressContentEditableWarning={true}
                        className="page"
                    >
                    </div>
            </div>
    )
}