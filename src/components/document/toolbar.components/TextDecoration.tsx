import React from "react";
import {Tooltip} from "antd";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";

export const TextDecoration = () => {

    const [underlinedActive, setUnderlined] = React.useState(false)

    const underlinedHandler = () => {
        setUnderlined(underlinedActive === false ? true : false)
    }

    return (
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
    )
}