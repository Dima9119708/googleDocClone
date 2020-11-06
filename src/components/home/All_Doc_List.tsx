import React, {FunctionComponent} from "react";
import {Box, Container, Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import {homeReducerTYPE} from "../../redux/store";
import EventBusyIcon from '@material-ui/icons/EventBusy';
import {CreateListDoc} from "./CreateListDoc";


export const AllDocList : FunctionComponent = () => {

    const userData = useSelector(({homeReducer} : homeReducerTYPE) => homeReducer.dataUser)

    return (
        <Container
            maxWidth="md"
            style={{
                padding : '10px 5px',
                paddingBottom : '130px'
            }}
        >

            { userData !== null
              && !Object.keys(userData).length
              && <Grid
                    container
                    alignItems="center"
                    justify="center"
                    style={{
                        minHeight : '250px',
                    }}>

                        <Box component="h3">
                            Поле документов пустое
                        </Box>

                        <EventBusyIcon
                            style={{
                                marginLeft : "8px",
                                fontSize : '28px',
                                color : '#1a48b5'
                        }}/>

              </Grid>
            }

            {userData !== null
             &&
             Object.keys(userData)
                   .map( (item) => <CreateListDoc key={item} id={item} />)}

        </Container>
    )
}