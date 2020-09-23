import React from "react";
import DescriptionIcon from '@material-ui/icons/Description';
import {Avatar, Box, Container, Grid, IconButton, Input} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AssignmentIcon from '@material-ui/icons/Assignment';


export function Home() {
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
                    boxShadow : '0 2px 5px 2px rgba(60,64,67,0.15)'
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
                    <Avatar ></Avatar>
                </Grid>

            </Grid>


            <Box
              style={{
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

        </Container>
    )
}