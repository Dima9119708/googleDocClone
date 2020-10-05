import React from "react";
import {Tooltip} from "antd";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";

export const FontStyle = () => {

    const [italicActive, setItalic] = React.useState(false)

    const italicHandler = () => {
        setItalic(italicActive === false ? true : false)
    }

    return (
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
    )
}