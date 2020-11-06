import React, {FunctionComponent} from "react";
import {Box, Container, Grid, IconButton, Menu} from "@material-ui/core";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {homeReducerTYPE} from "../../redux/store";
import DoneIcon from '@material-ui/icons/Done';
import {SET_SORT_AC} from "../../redux/homeReducer/homeAction";

export const PanelSort : FunctionComponent = () => {

    const sortPopupOptions : string[] = ['По названию', 'По дате просмотра']

    const optionItem = useSelector(  ( { homeReducer } : homeReducerTYPE) => homeReducer.sort)
    const userData = useSelector(({homeReducer} : homeReducerTYPE) => homeReducer.dataUser)

    const dispatch = useDispatch()
    const [$openSortPopup, setSortPopup] = React.useState<any>(null)

    React.useEffect(() => {
        dispatch(SET_SORT_AC('По дате просмотра'))
    }, [])

    const changePopupSortItem = (item : string) => {
        dispatch(SET_SORT_AC(item))
    }

    const openSortPopup = (e : React.MouseEvent) => {
        setSortPopup(e.currentTarget)
    }

    const closeSortPopup = () => {
        setSortPopup(null)
    }

    return (
        <Box style={{
            display : userData !== null && !Object.keys(userData).length ? 'none' : 'block',
            padding : '5px 0',
            backgroundColor : '#fff',
            boxShadow : '0px 6px 9px 0px rgba(60, 64, 67, 0.15)'
        }}
        >

            <Container
                maxWidth="md"
                style={{
                    padding : '0 18px',
                }}
            >

                <Grid
                    container
                    alignItems="center"
                >

                    <Grid
                        item
                        xs={7}
                    >
                        <h4
                            style={{
                                fontWeight : 'normal',
                                fontSize : '16px'
                            }}
                        >Название документов</h4>
                    </Grid>

                    <Grid
                        item
                        xs={4}
                        style={{
                            fontWeight : 'bold',
                            fontSize : '14px'
                        }}
                    >
                        {optionItem}
                    </Grid>

                    <Grid
                        item
                        xs={1}
                    >

                        <IconButton
                            onClick={openSortPopup}
                        >
                            <SortByAlphaIcon
                                style={{
                                    color: '#000'
                                }}
                            />
                        </IconButton>

                        <Menu
                            anchorEl={$openSortPopup}
                            open={Boolean($openSortPopup)}
                            onClick={closeSortPopup}
                            style={{
                                top : '50px'
                            }}
                        >
                            { sortPopupOptions.map( (item,index) => {
                                return <MenuItem
                                    key={item}
                                    onClick={() => {
                                        closeSortPopup()
                                        changePopupSortItem(item)
                                    }}>
                                    { optionItem === item
                                                    ? <DoneIcon
                                                       style={{
                                                           fontSize : '18px',
                                                           marginRight : '10px'
                                                       }}/>
                                                    : ''}
                                    { item }
                                </MenuItem>
                            }) }
                        </Menu>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    )
}