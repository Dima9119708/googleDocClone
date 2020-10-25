import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    CHANGE_TEXT_ACTION, FONT_FAMILY_ACTION, FONT_SIZE_ACTION, FONT_STYLE_ACTION, FONT_WEIGHT_ACTION,
    LINK_PRINT_DOM_ACTION, TEXT_DECORATION_ACTION,
} from "../../../redux/documentRecuder/docAction";
import {docReducerTYPE} from "../../../redux/store";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {formatFontFamily, formatGetFontFamily} from "./page.functions";

const heightPage = 1200
export const widthPage = 800

const { fontSize, fontWeight, fontStyle, textDecoration, fontFamily } = defaultPageStyle

export const Page = () => {

    const [getRange, setRange] = React.useState({})
    const [currentText, setCurrentText] = React.useState('')

    const { page, changeText, styles} = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const $divContent = React.useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()


    const handleInput = (e : React.FormEvent<HTMLDivElement>) => {}


    React.useEffect(() => {

        const div = $divContent.current!.children[0] as HTMLDivElement
        div.focus()
        dispatch(LINK_PRINT_DOM_ACTION($divContent.current!))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [$divContent])


    React.useEffect(() => {

        if (changeText && currentText) {
             const selection = document.getSelection()!

             const range = getRange as Range;
             selection.removeAllRanges();
             selection.addRange(range)

             const style = document.getElementById('styleHead')
             style!.innerHTML += `
                 .fontSize${styles.fontSize} {
                    font-size : ${styles.fontSize}px;
                 }
                 
                 .${formatFontFamily(styles.fontFamily)} {
                    font-family : ${styles.fontFamily}, sans-serif;
                 }
             `

             const text = `<span
                     id="selected"
                     style="background-color: rgba(25,119,195, .2);
                
                     "
                     class="fontSize${styles.fontSize} ${styles.fontWeight} ${styles.fontStyle} ${styles.textDecoration} ${formatFontFamily(styles.fontFamily)}"
                   >${currentText}</span>`

             document.execCommand('insertHTML', false, text)
             dispatch(CHANGE_TEXT_ACTION(false))
             setCurrentText('')
        }
        else {
            dispatch(CHANGE_TEXT_ACTION(false))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changeText])


    const handleSelectText = () => {
        const value = document.getSelection()!.toString()

        if (value) {
            setRange(document.getSelection()!.getRangeAt(0))
            setCurrentText(value)
        }
    }


    const handleGetStyles = (e : React.MouseEvent) => {
        const target = e.target as HTMLDivElement
        const styles = window.getComputedStyle(target, null)
        const getFontSize = styles.fontSize.split('px')[0]
        const getFontFamily = formatGetFontFamily(styles.fontFamily)
        const classes = target.className.split(' ')

        dispatch(FONT_SIZE_ACTION(getFontSize ? getFontSize : fontSize))
        dispatch(FONT_WEIGHT_ACTION(classes.includes('bold') ? 'bold' : fontWeight))
        dispatch(FONT_STYLE_ACTION( classes.includes('italic') ? 'italic' : fontStyle))
        dispatch(TEXT_DECORATION_ACTION( classes.includes('underline') ? 'underline' : textDecoration))
        dispatch(FONT_FAMILY_ACTION(getFontFamily))
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
                        className="page"
                    >

                    </div>
            </div>
    )
}