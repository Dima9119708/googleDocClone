import {Avatar, Grid, IconButton, Input} from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React from "react";

export const Header : React.FC = () => {

    const [deleteTextInput, setDeleteTextInput] = React.useState<'none' | 'block'>('none')
    const [searchList, setSearchList] = React.useState<'none' | 'block'>('none')
    const $parentInput = React.useRef<HTMLDivElement>(null)
    const $input = React.useRef<HTMLInputElement>(null)

    const onChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
        const { value } = e.currentTarget

        if (value.length >= 1) {
            setDeleteTextInput('block')
            setSearchList('block')
        }
        else {
            setDeleteTextInput('none')
            setSearchList('none')
        }
    }

    const delTextInput = () => {
        $input.current!.value = ''
        setDeleteTextInput('none')
    }

    const focusInput = () => {
        $parentInput.current!.classList.remove('header__input-blur')
        $parentInput.current!.classList.add('header__input-focus')
    }

    const blurInput = () => {
        $parentInput.current!.classList.remove('header__input-focus')
        $parentInput.current!.classList.add('header__input-blur')
        setSearchList('none')
    }

    return (
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
                ref={$parentInput}
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
                    onChange={onChange}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    inputRef={$input}
                    placeholder="Поиск"
                    style={{
                        width : '85%'
                    }}
                />
                <IconButton
                  style = {{
                    display : deleteTextInput,
                  }}
                  onClick={delTextInput}
                >
                    <HighlightOffIcon
                        style = {{
                            color : '#000000'
                        }}
                    />
                </IconButton>

                <Grid
                    className="header__doc-search-list"
                    style={{
                        display : searchList
                    }}
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
    )
}