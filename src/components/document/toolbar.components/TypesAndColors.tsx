import React from "react";
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import {Popover, Tooltip} from "antd";
import {Box} from "@material-ui/core";
import {CirclePicker } from 'react-color'


export const TypesAndColors = () => {

    const [boldActive, setBold] = React.useState(false)
    const [italicActive, setItalic] = React.useState(false)
    const [underlinedActive, setUnderlined] = React.useState(false)
    const [activePopupColorText, setPopupColorText] = React.useState(false)
    const [getColorText, setColorText] = React.useState('rgba(0, 0, 0, 0.85)')

    const $colorText = React.useRef<SVGSVGElement>(null)

    React.useEffect(() => {

        const svgColorText = $colorText.current!.children[0] as HTMLElement
        svgColorText.style.color = getColorText

    }, [getColorText])

    const boldHandler = () => {
        setBold(boldActive === false ? true : false)
    }

    const italicHandler = () => {
        setItalic(italicActive === false ? true : false)
    }

    const underlinedHandler = () => {
        setUnderlined(underlinedActive === false ? true : false)
    }

    const handleSetColorText = (color : {hex : string}) => {
        setColorText(color.hex)
    }

    const handleChangePopupColorText = () => {
        setPopupColorText(activePopupColorText === false ? true : false)
    }

    return (
        <Box style={{cursor : 'pointer'}} >

            <Tooltip title="Полужирный" placement="top">
                <FormatBoldIcon
                    onClick={boldHandler}
                    style={{
                       marginRight : '8px',
                       backgroundColor : boldActive === true ? 'rgb(232, 240, 254)' : '',
                       color : boldActive === true ? 'rgb(26, 115, 232)' : '',
                       borderRadius : '2px'
                    }}
                />
            </Tooltip>

            <Tooltip title="Курсивный" placement="top">
                <FormatItalicIcon
                    onClick={italicHandler}
                    style={{
                        marginRight : '8px',
                        backgroundColor : italicActive === true ? 'rgb(232, 240, 254)' : '',
                        color : italicActive === true ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                }} />
            </Tooltip>

            <Tooltip title="Подчеркнутый" placement="top">
                <FormatUnderlinedIcon
                    onClick={underlinedHandler}
                    style={{
                        marginRight : '8px',
                        backgroundColor : underlinedActive === true ? 'rgb(232, 240, 254)' : '',
                        color : underlinedActive === true ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                }}
                />
            </Tooltip>

            <Tooltip title="Цвет текста" placement="top">

                <Popover
                    trigger="click"
                    visible={activePopupColorText}
                    onVisibleChange={handleChangePopupColorText}
                    content={
                        <CirclePicker color="#fff" onChange={handleSetColorText}/>
                    }
                >
                    <FormatColorTextIcon ref={$colorText} style={{marginRight : '8px'}}/>
                </Popover>

            </Tooltip>

            <Tooltip title="Цвет текста фон" placement="top">
                <FormatColorFillIcon style={{marginRight : '8px'}} />
            </Tooltip>

        </Box>
    )
}