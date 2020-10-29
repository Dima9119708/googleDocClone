import React from "react";
import ImageIcon from '@material-ui/icons/Image';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PublishIcon from '@material-ui/icons/Publish';
import {Grid } from "@material-ui/core";
import {Tooltip} from "antd";
import {setStyles} from "../mainBlock.components/page/page.functions";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";


export const LoadImage = () => {

    const { range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [anchorEl, setAnchorEl] = React.useState<any>(null);

    const handleClick = (event : React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoadImage = ( e : React.ChangeEvent) => {

        const reader = new FileReader()

        const target = e.target as HTMLInputElement

        reader.onload = () => {
            setStyles(range, 'insertImage', `${reader.result}`)
        }

        reader.readAsDataURL(target.files![0])
    }
    
    return (
        <Tooltip title="Загрузить изображение" placement="top">
            <Box
                onClick={handleClick}
            >
                <ImageIcon />
                <ArrowDropDownIcon
                    style={{
                        marginLeft : '-5px'
                    }}
                />
            </Box>

            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{top : '40px'}}
            >
                <MenuItem
                    onClick={handleClose}
                    style={{padding : '5px 10px'}}
                >

                    <input
                        accept="image/*"
                        id="fileImage"
                        name="fileImage"
                        onChange={handleLoadImage}
                        multiple
                        type="file"
                        style={{display : 'none'}}
                    />
                    <label htmlFor="fileImage">
                        <Grid
                            container
                            alignItems="center"
                            style={{
                                cursor : 'pointer',
                                fontSize : '15px'
                            }}
                        >
                            <PublishIcon style={{marginRight : '5px', color : 'gray'}} />
                            Загрузить изображание
                        </Grid>
                    </label>

                </MenuItem>
            </Menu>
        </Tooltip>
    )
}