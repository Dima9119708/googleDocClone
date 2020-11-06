import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Menu,
    TextField
} from "@material-ui/core";
import {Link} from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {useDispatch, useSelector} from "react-redux";
import {homeReducerTYPE} from "../../redux/store";
import {SET_DELETE_DOC_LIST_ACTION, SET_NEW_NAME_ACTION} from "../../redux/homeReducer/homeAction";
import * as firebase from "firebase";
import {userID} from "../../core/different";


export const CreateListDoc = ({ id : item } : {id : string}) => {

    const [getOptionsItem, setOptionsItem] = React.useState<any>(false)
    const [openModal, setOpenModal] = React.useState(false);
    const $input = React.useRef<HTMLInputElement>(null)

    const userData = useSelector(({homeReducer} : homeReducerTYPE) => homeReducer.dataUser)!
    const dispatch = useDispatch()

    const openOptionsItem = (e : React.MouseEvent) => {
        setOptionsItem(e.currentTarget)
    }

    const closeOptionsItem = () => {
        setOptionsItem(false)
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    };

    const handleCloseModal = () => {
        setOpenModal(false)
        setOptionsItem(false)
    };


    const deleteDocList = (key : any) => {
        dispatch(SET_DELETE_DOC_LIST_ACTION(key))

        const id = userID()

        firebase
            .database()
            .ref(`/docReact/${id}/list/${key}/`)
            .remove()

        firebase
            .database()
            .ref(`/docReact/${id}/docsDATA/${key}/`)
            .remove()
    }


    const changeNameTitle = (key : string) => {
        const value = $input.current!.value === '' ? 'Новый документ' : $input.current!.value
        dispatch(SET_NEW_NAME_ACTION(value, key))

        const id = userID()

        firebase
            .database()
            .ref(`/docReact/${id}/list/${key}/name/`)
            .set(value)

        firebase
            .database()
            .ref(`/docReact/${id}/docsDATA/${key}/title/`)
            .set(value)
    }


    return (
        <Grid
            key={item}
            container
            alignItems="center"
            className="item__hover"
            style={{padding: '0 10px'}}
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
                        to={`/doc/${userData[item].id}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <AssignmentIcon
                            style={{
                                color: '#1654de'
                            }}
                        />
                    </Link>

                    <Grid
                        item
                        xs={11}>
                        <Link
                            to={`/doc/${userData[item].id}`}
                            style={{
                                display: 'block',
                                color: '#000',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                marginLeft: '10px',
                                fontSize: '15px',
                                fontWeight: 500
                            }}
                        >
                            {userData[item].name}
                        </Link>
                    </Grid>

                </Grid>
            </Grid>

            <Grid
                item
                xs={4}
            >
                <Link
                    to={`/doc/${userData[item].id}`}
                    style={{
                        display: 'block',
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
                <IconButton onClick={openOptionsItem}>
                    <MoreVertIcon/>
                </IconButton>

                <Menu
                    anchorEl={getOptionsItem}
                    open={Boolean(getOptionsItem)}
                    onClick={closeOptionsItem}
                    style={{top: '50px'}}
                >
                    <MenuItem onClick={handleOpenModal}>
                        <TextFieldsIcon style={{marginRight: '10px', color: '#767676'}}/>
                        Перейменовать
                    </MenuItem>

                    <MenuItem onClick={() => {deleteDocList(item)}}>
                        <DeleteForeverIcon style={{marginRight: '10px', color: '#999999'}}/>
                        Удалить
                    </MenuItem>

                </Menu>

            </Grid>

            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Переименовать документ
                </DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Название документа"
                        defaultValue={userData![item].name}
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
                            color="primary"
                    >
                        Изменить
                    </Button>
                </DialogActions>
            </Dialog>

        </Grid>
    )
}