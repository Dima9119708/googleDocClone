import React, {FunctionComponent} from "react";
import DescriptionIcon from '@material-ui/icons/Description';
import {Avatar, Box, Container, Grid, IconButton, Input, Menu} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import CheckIcon from '@material-ui/icons/Check';


export const Home : FunctionComponent = () => {
    const sortPopupOptions = ['По названию', 'По дате просмотра']
    const [$openSortPopup, setSortPopup] = React.useState<any>(false)
    const [sortActiveItem, setSortActiveItem] = React.useState<string>('По названию')

    const openSortPopup = (e : React.MouseEvent) => {
        setSortPopup(e.currentTarget)
    }

    const closeSortPopup = () => {
        setSortPopup(false)
    }

    return (
        <Container
            maxWidth="xl"
            style={{padding : 0}}
        >

            <Grid
                container
                direction="row"
                alignItems="center"
                style={{
                    padding : '8px 30px',
                }}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="flex-start"
                    item
                    xs={3}
                >
                    <DescriptionIcon
                      style={{
                          color : '#5490F5',
                          fontSize : '40px',
                      }}
                    />
                    <p
                        className="header__doc-text"
                    >Документы</p>
                </Grid>

                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    item
                    xs={6}
                    style={{
                        position : 'relative',
                        backgroundColor: 'rgba(192,192,192,0.2)',
                        borderRadius : "10px"
                    }}
                >
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <Input
                            placeholder="Поиск"
                            style={{
                                width : '85%'
                            }}
                        />
                        <IconButton >
                            <HighlightOffIcon
                                style = {{
                                    color : '#000000'
                                }}
                            />
                        </IconButton>
                        <Grid
                            className="header__doc-search-list"
                        >

                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="space-between"
                                className="header__doc-search-list-item"
                            >
                                <Grid
                                    container
                                    alignItems="center"
                                    direction="row"
                                    item
                                    xs={10}
                                >
                                    <AssignmentIcon
                                        style = {{
                                            color : '#0b53ed',
                                            marginRight: '5px',
                                            fontSize : '20px'
                                        }}
                                    />
                                    <h3
                                      style={{
                                          fontSize : '16px',
                                          fontWeight : 'normal'
                                      }}
                                    >Документ от 26 мая 2021505050050404</h3>
                                </Grid>
                                <time>13.09.20</time>

                            </Grid>
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="space-between"
                                className="header__doc-search-list-item"

                            >
                                <Grid
                                    container
                                    alignItems="center"
                                    direction="row"
                                    item
                                    xs={10}
                                >
                                    <AssignmentIcon
                                        style = {{
                                            color : '#0b53ed',
                                            marginRight: '5px',
                                            fontSize : '20px'
                                        }}
                                    />
                                    <h3
                                        style={{
                                            fontSize : '16px',
                                            fontWeight : 'normal'
                                        }}
                                    >Документ от 26 мая 2021505050050404</h3>
                                </Grid>
                                <time>13.09.20</time>

                            </Grid>
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="space-between"
                                className="header__doc-search-list-item"
                            >
                                <Grid
                                    container
                                    alignItems="center"
                                    direction="row"
                                    item
                                    xs={10}
                                >
                                    <AssignmentIcon
                                        style = {{
                                            color : '#0b53ed',
                                            marginRight: '5px',
                                            fontSize : '20px'
                                        }}
                                    />
                                    <h3
                                        style={{
                                            fontSize : '16px',
                                            fontWeight : 'normal'
                                        }}
                                    >Документ от 26 мая 2021505050050404</h3>
                                </Grid>
                                <time>13.09.20</time>

                            </Grid>
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="space-between"
                                className="header__doc-search-list-item"
                            >
                                <Grid
                                    container
                                    alignItems="center"
                                    direction="row"
                                    item
                                    xs={10}
                                >
                                    <AssignmentIcon
                                        style = {{
                                            color : '#0b53ed',
                                            marginRight: '5px',
                                            fontSize : '20px'
                                        }}
                                    />
                                    <h3
                                        style={{
                                            fontSize : '16px',
                                            fontWeight : 'normal'
                                        }}
                                    >Документ от 26 мая 2021505050050404</h3>
                                </Grid>
                                <time>13.09.20</time>

                            </Grid>

                        </Grid>
                </Grid>

                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="flex-end"
                    item
                    xs={3}
                >
                    <Avatar />
                </Grid>

            </Grid>


            <Box style={{
                  padding : '20px 0',
                  backgroundColor : '#F1F3F4'
              }}
            >
                <Container
                    maxWidth="md"
                >

                    <Box className="add__doc-plus" />
                    <Box
                        component="h3"
                        className="add__doc-title"
                    >Пустой файл</Box>

                </Container>
            </Box>

            <Box style={{
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
                            По дате просмотра
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

                                { sortPopupOptions && sortPopupOptions.map(item => {
                                      return <MenuItem
                                             key={item}
                                             onClick={() => {
                                                 closeSortPopup()
                                             }}
                                             >
                                             { sortActiveItem === item ? <CheckIcon /> : '' }
                                             { item }
                                      </MenuItem>
                                  })
                                }
                            </Menu>

                        </Grid>

                    </Grid>

                </Container>

            </Box>

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
                        <IconButton >
                            <MoreVertIcon />
                        </IconButton>
                    </Grid>

                </Grid>

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
                        <IconButton >
                            <MoreVertIcon />
                        </IconButton>
                    </Grid>

                </Grid>

            </Container>

        </Container>
    )
}