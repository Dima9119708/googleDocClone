import React from "react";
import {Tooltip} from "antd";
import FormatBoldIcon from "@material-ui/icons/FormatBold";

export const FontWeight = () => {

    const [boldActive, setBold] = React.useState(false)
    const boldHandler = () => {
        setBold(boldActive === false ? true : false)
    }

    return (

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
    )
}