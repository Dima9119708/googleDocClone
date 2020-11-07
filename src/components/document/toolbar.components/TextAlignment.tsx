import React from "react";
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import {Tooltip} from "antd";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {emitter} from "../../../core/emitter";


const { textAlign : textAlignDef } = defaultPageStyle

export const TextAlignment = () => {

    const [textAlign, setTextAlign] = React.useState(textAlignDef)

    React.useEffect(() => {
        emitter.on('TEXT_ALIGN', TEXT_ALIGN => setTextAlign(TEXT_ALIGN))
    }, [])

    const changeTextAlign = (pos : string) => {
        setTextAlign(pos)

        if (pos === 'center') document.execCommand('justifyCenter')
        else if (pos === 'right') document.execCommand('justifyRight')
        else document.execCommand('justifyLeft')
    }

    return (
        <>
            <Tooltip title="Выравнивание по левому краю" placement="top">
                <FormatAlignLeftIcon
                    onClick={() => changeTextAlign('left')}
                    style={{
                        marginRight : '8px',
                        padding : textAlign === 'left' ? '2px' : '',
                        backgroundColor : textAlign === 'left' ? 'rgb(232, 240, 254)' : '',
                        color : textAlign === 'left' ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                    }}
                />
            </Tooltip>

            <Tooltip title="Выравнивание по центру" placement="top">
                <FormatAlignJustifyIcon
                    onClick={() => changeTextAlign('center')}
                    style={{
                        marginRight : '8px',
                        padding : textAlign === 'center' ? '2px' : '',
                        backgroundColor : textAlign === 'center' ? 'rgb(232, 240, 254)' : '',
                        color : textAlign === 'center' ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                    }}
                />
            </Tooltip>

            <Tooltip title="Выравнивание по правому краю" placement="top">
                <FormatAlignRightIcon
                    onClick={() => changeTextAlign('right')}
                    style={{
                        marginRight : '8px',
                        padding : textAlign === 'right' ? '2px' : '',
                        backgroundColor : textAlign === 'right' ? 'rgb(232, 240, 254)' : '',
                        color : textAlign === 'right' ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                    }}
                />
            </Tooltip>

        </>
    )
}