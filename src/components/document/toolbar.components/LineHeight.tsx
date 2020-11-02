import React from "react";
import FormatLineSpacingIcon from '@material-ui/icons/FormatLineSpacing';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Tooltip} from "antd";
import {useDispatch} from "react-redux";
import {LINE_HEIGHT_ACTION} from "../../../redux/documentRecuder/docAction";

export const LineHeight = () => {

    const lineSpacing = [1, 1.15, 1.25, 1.40, 1.5, 2]

    const [anchorEl, setAnchorEl] = React.useState<any>(null);
    const dispatch = useDispatch()

    const handleChange = (lineHeight : number) => {
        dispatch(LINE_HEIGHT_ACTION(lineHeight))
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