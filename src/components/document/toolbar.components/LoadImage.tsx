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
import {Scale} from "./Scale";


export const LoadImage = () => {

    const { targetNode } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
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

            const $targetNode = targetNode! as HTMLDivElement
            const divElem = document.createElement('div')
            divElem.classList.add('activeImage')
            divElem.classList.add('image')
            divElem.classList.add('unselectable')
            divElem.style.backgroundImage = `url(${reader.result})`
            divElem.contentEditable = 'false'

            divElem.innerHTML = ` 
                <div style="cursor: ew-resize" data-rightCenter="rightCenter"></div>
                <div style="cursor: nwse-resize" data-rightBottom="rightBottom"></div>
                <div style="cursor: ns-resize" data-bottomCenter="bottomCenter"></div>
            `

            $targetNode.appendChild(divElem)
        }

        reader.readAsDataURL(target.files![0])
    }

    React.useEffect(() => {
        document.onmousedown = e => {

            const target = e.target as HTMLDivElement

            const rightCenter = target.dataset['rightcenter']
            const rightBottom = target.dataset['rightbottom']
            const bottomCenter = target.dataset['bottomcenter']

            if (rightCenter || rightBottom || bottomCenter) {

                const parentNode = target.parentNode as HTMLDivElement
                const pos = parentNode.getBoundingClientRect()

                document.onmousemove = e => {

                    const delta = e.x - pos.right
                    const deltaBottom = e.y - pos.bottom

                    if (rightCenter) {
                        parentNode.style.width = pos.width + delta + 'px'
                    }
                    else if (rightBottom) {
                        parentNode.style.height = pos.height + delta + 'px'
                        parentNode.style.width = pos.width + delta + 'px'
                    }
                    else {
                        parentNode.style.height = pos.height + deltaBottom + 'px'
                    }
                }

                document.onmouseup = e => {
                    document.onmousemove = null
                    document.onmouseup = null
                }
            }
        }
    }, [])
    
    return (
        <Tooltip title="Загрузить изображение" placement="top">
            <Box
                onClick={handleClick}
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
    )
}