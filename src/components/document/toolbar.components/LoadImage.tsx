import React from "react";
import ImageIcon from '@material-ui/icons/Image';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PublishIcon from '@material-ui/icons/Publish';
import {Grid } from "@material-ui/core";
import {Tooltip, notification} from "antd";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {setStyles} from "../mainBlock.components/page/page.functions";


const openNotification = () => {
    const args = {
        message: 'Ошибка',
        description:
            'Загружаемый файл должен быть формата PNG, JPEG, JPG, SVG, GIF, WEBP',
        duration: 0,
    };
    notification.open(args);
};

export const LoadImage = () => {

    const { range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [anchorEl, setAnchorEl] = React.useState<any>(null);
    const [validImage, setValidImage] = React.useState(false);

    const handleClick = (event : React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    React.useEffect(() => setValidImage(false), [validImage])

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoadImage = ( e : React.ChangeEvent ) => {

        const reader = new FileReader()

        const target = e.target as HTMLInputElement
        const image = target.files![0]

        const textImage = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i

        if( textImage.test(image.name) ) {

            reader.onload = () => {

                const createImageDiv = `
                   <div>
                       <div style="min-height: 20px">...</div>
                       <div
                             contenteditable="false"
                             class="image unselectable" 
                             style="background-image: url(${reader.result})"
                             > 
                                <div style="cursor: ew-resize" data-rightCenter="rightCenter"></div>
                                <div style="cursor: nwse-resize" data-rightBottom="rightBottom"></div>
                                <div style="cursor: ns-resize" data-bottomCenter="bottomCenter"></div>
                                <div style="cursor: ew-resize" data-leftCenter="leftCenter"></div>
                        </div>
                        <div style="min-height: 20px; overflow: hidden;" >...</div>
                 </div>
                `

                setStyles(range, 'insertHTML', createImageDiv)
                target.value = ''
            }

            reader.readAsDataURL(image)
        }
        else {
            setValidImage(true)
        }
    }

    return (<>
        <Tooltip title="Загрузить изображение" placement="top">
            <Box onClick={handleClick}
            >
                <ImageIcon />
                <ArrowDropDownIcon
                    style={{marginLeft : '-5px'}}
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
        {validImage && openNotification()}
    </>)
}