import React, {FunctionComponent} from "react";
import {Container, Grid, IconButton, Menu} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TextFieldsIcon from '@material-ui/icons/TextFields';

export const AllDocList : FunctionComponent = () => {

    const [getOptionsItem, setOptionsItem] = React.useState<any>(false)

    const openOptionsItem = (e : React.MouseEvent) => {
        setOptionsItem(e.currentTarget)
    }

    const closeOptionsItem = () => {
        setOptionsItem(false)
    }

    return (
        <Container
            maxWidth="md"
            style={{padding : '10px 5px'}}
        >
            <Grid
                container
                alignItems="center"
                className="item__hover"
                style={{
                    padding : '0 10px',
                    borderBottom : '1px solid hsla(0, 0%, 44%, 0.4)'
                }}
            >

                <Grid
                    item
                    xs={7}
                >
                    <Grid
                        container
                        alignItems="center"
                        direction="row"
                    >

                        <AssignmentIcon
                            style={{
                                color : '#1654de'
                            }}
                        />
                        <Grid
                            item
                            xs={11}
                            style={{
                                whiteSpace : 'nowrap',
                                overflow : 'hidden',
                                textOverflow : 'ellipsis',
                                marginLeft: '10px',
                                fontSize : '15px',
                                fontWeight : 'bold'
                            }}
                        >
                            Новый документ
                        </Grid>

                    </Grid>
                </Grid>

                <Grid
                    item
                    xs={4}
                >
                    23. сент. 2020 г.
                </Grid>

                <Grid
                    item
                    xs={1}
                >
                    <IconButton
                       onClick={openOptionsItem}
                    >
                        <MoreVertIcon />
                    </IconButton>

                    <Menu
                        anchorEl={getOptionsItem}
                        open={Boolean(getOptionsItem)}
                        onClick={closeOptionsItem}
                        style={{
                            top : '50px'
                        }}
                    >
                        <MenuItem onClick={() => {
                             closeOptionsItem()
                        }}>
                            <TextFieldsIcon
                              style={{
                                  marginRight : '10px',
                                  color : '#767676'
                              }}
                            />
                            Перейменовать
                        </MenuItem>

                        <MenuItem onClick={() => {
                            closeOptionsItem()
                        }}>
                            <DeleteForeverIcon
                                style={{
                                    marginRight : '10px',
                                    color : '#999999'
                                }}
                            />
                            Удалить
                        </MenuItem>

                    </Menu>

                </Grid>

            </Grid>

        </Container>
    )
}