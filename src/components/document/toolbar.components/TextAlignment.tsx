import React from "react";
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import {Tooltip} from "antd";

export const TextAlignment = () => {

    const [textAligh, setTextAligh] = React.useState('left')

    const changeTextAligh = (pos : string) => setTextAligh(pos)

    return (
        <>
            <Tooltip title="Выравнивание по левому краю" placement="top">
                <FormatAlignLeftIcon
                    onClick={() => changeTextAligh('left')}
                    style={{
                        marginRight : '8px',
                        padding : textAligh === 'left' ? '2px' : '',
                        backgroundColor : textAligh === 'left' ? 'rgb(232, 240, 254)' : '',
                        color : textAligh === 'left' ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                    }}
                />
            </Tooltip>

            <Tooltip title="Выравнивание по центру" placement="top">
                <FormatAlignJustifyIcon
                    onClick={() => changeTextAligh('center')}
                    style={{
                        marginRight : '8px',
                        padding : textAligh === 'center' ? '2px' : '',
                        backgroundColor : textAligh === 'center' ? 'rgb(232, 240, 254)' : '',
                        color : textAligh === 'center' ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                    }}
                />
            </Tooltip>

            <Tooltip title="Выравнивание по правому краю" placement="top">
                <FormatAlignRightIcon
                    onClick={() => changeTextAligh('right')}
                    style={{
                        marginRight : '8px',
                        padding : textAligh === 'right' ? '2px' : '',
                        backgroundColor : textAligh === 'right' ? 'rgb(232, 240, 254)' : '',
                        color : textAligh === 'right' ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                    }}
                />
            </Tooltip>

        </>
    )
}