import React, {FunctionComponent} from "react";
import {Box, Container, Grid, IconButton, Menu, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import {useDispatch, useSelector} from "react-redux";
import {homeReducerTYPE} from "../../redux/store";
import EventBusyIcon from '@material-ui/icons/EventBusy';
import {SET_DELETE_DOC_LIST_ACTION, SET_NEW_NAME_ACTION} from "../../redux/homeReducer/homeAction";
import {Link} from "react-router-dom";


export const AllDocList : FunctionComponent = () => {

    const [getOptionsItem, setOptionsItem] = React.useState<any>(false)
    const [openModal, setOpenModal] = React.useState(false);
    const $input = React.useRef<HTMLInputElement>(null)

    const userData = useSelector(({homeReducer} : homeReducerTYPE) => homeReducer.dataUser)
    const dispatch = useDispatch()


    const openOptionsItem = (e : React.MouseEvent) => {
        setOptionsItem(e.currentTarget)
    }

    const closeOptionsItem = () => {
        setOptionsItem(false)
    }

    const deleteDocList = (item : string) => {
        dispatch(SET_DELETE_DOC_LIST_ACTION(item))
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    };

    const handleCloseModal = () => {
        setOpenModal(false)
        setOptionsItem(false)
    };

    const changeNameTitle = (item : string) => {
        const value = $input.current!.value === '' ? 'Новый документ' : $input.current!.value
        dispatch(SET_NEW_NAME_ACTION(value, item))
    }

    return (
        <Container
            maxWidth="md"
            style={{padding : '10px 5px'}}
        >

            { userData !== null
              && !Object.keys(userData).length
              && <Grid
                    container
                    alignItems="center"
                    justify="center"
                    style={{
                        minHeight : '250px',
                    }}
                >

                <Box
                    component="h3"
                >
                    Поле документов пустое
                </Box>

                <EventBusyIcon
                    style={{
                        marginLeft : "8px",
                        fontSize : '28px',
                        color : '#1a48b5'
                    }}
                />

            </Grid>
            }

            { userData !== null
              && Object.keys(userData).map(item => {

                return <Grid
                    key={item}
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
                            <Link
                                to="/doc"
                                style={{
                                    display : 'flex',
                                    alignItems : 'center'
                                }}
                            >
                                <AssignmentIcon
                                    style={{
                                        color : '#1654de'
                                    }}
                                />
                            </Link>
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
                                <Link
                                    to="/doc"
                                    style={{
                                        display : 'block',
                                        color: '#000'
                                    }}
                                >
                                    {userData[item].title}
                                </Link>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid
                        item
                        xs={4}
                    >
                        <Link
                            to="/doc"
                            style={{
                                display : 'block',
                                color: '#000'
                            }}
                        >
                            {userData[item].date}
                        </Link>

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
                            <MenuItem
                                onClick={handleOpenModal}>
                                <TextFieldsIcon
                                    style={{
                                        marginRight : '10px',
                                        color : '#767676'
                                    }}
                                />
                                Перейменовать
                            </MenuItem>

                            <MenuItem
                                onClick={() => {
                                deleteDocList(item)
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
                    <Dialog
                        open={openModal}
                        onClose={handleCloseModal}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle
                            id="form-dialog-title"
                        >
                            Переименовать документ
                        </DialogTitle>
                        <DialogContent>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Название документа"
                                defaultValue={userData[item].title}
                                type="text"
                                fullWidth
                                inputRef={$input}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">
                                Закрыть
                            </Button>
                            <Button onClick={() => {
                                handleCloseModal()
                                changeNameTitle(item)
                            }}
                                    color="primary">
                                Изменить
                            </Button>
                        </DialogActions>
                    </Dialog>

                </Grid>
            })}

        </Container>
    )
}