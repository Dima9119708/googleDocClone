import React from "react";
import FormatLineSpacingIcon from '@material-ui/icons/FormatLineSpacing';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Tooltip} from "antd";

export const LineSpacing = () => {

    const lineSpacing = [1, 1.5, 2]

    const [anchorEl, setAnchorEl] = React.useState<any>(null);

    const handleChange = (lineSpaceing : number) => {
        console.log(lineSpaceing)
    }

    const handleClick = (event : React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Tooltip title="Межстрочный интервал" placement="top">
            <FormatLineSpacingIcon onClick={handleClick} />

            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{top : '40px' }}
            >
                {lineSpacing.map( (item,index) => {
                   return <MenuItem
                       onClick={() =>{
                           handleClose()
                           handleChange(item)
                       }}
                       style={{padding : '5px 10px', minWidth : '50px'}}
                       key={item + index}
                   >
                       {item}
                   </MenuItem>
                })}
            </Menu>
    </Tooltip>
    )
}