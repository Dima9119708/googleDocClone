import React from "react";
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

export const TextAlignment = () => {

    return (
        <>
            <FormatAlignLeftIcon style={{marginRight : '8px'}} />
            <FormatAlignJustifyIcon style={{marginRight : '8px'}} />
            <FormatAlignRightIcon style={{marginRight : '8px'}} />
        </>
    )
}