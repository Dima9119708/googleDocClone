import React from "react";
import DescriptionIcon from '@material-ui/icons/Description';
import {Box, Grid } from "@material-ui/core";
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import { TITLE_PAGE_ACTION } from "../../redux/documentRecuder/docAction";
import { useHistory } from "react-router-dom";
import {docReducerTYPE} from "../../redux/store";


export const Header = () => {

    const { page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()
    const history = useHistory();


    function handleClick() {
        history.push("/");
        window.location.reload()
    }


    const handleInput = (e : React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        dispatch(TITLE_PAGE_ACTION(value ? value : 'Новая дукумент'))
    }

    return (
        <header
          style={{
              backgroundColor : '#ffffff',
              borderBottom : '1px solid gray'
          }}
        >
          <Grid
            container
            alignItems="center"
            style={{padding : '8px 20px'}}
          >

              <DescriptionIcon
                  onClick={handleClick}
                  style={{
                      marginRight : '8px',
                      fontSize: '40px',
                      color: '#2042d1',
                      cursor : 'pointer'
              }}/>

              <Input
                  value={page.title}
                  onInput={handleInput}
                  style={{
                      marginRight : '10px',
                      minWidth : "12%",
                      width : "12%",
                      fontSize : '16px'
                  }}
              />

              <CloudDoneIcon style={{
                  //display : !save ? 'block' : 'none',
                  color : "#8d8d8d",
                  fontSize : '20px'
              }} />

              <AutorenewIcon
                  style={{
                     // display : save ? 'block' : 'none',
                      color : "#0e0e0e",
                      fontSize : '20px'
                  }}
                  className="header__doc-load-animate "
              />
              <Box style={{
                  //display : save ? 'block' : 'none',
                  fontSize : '14px'
              }}>
                Сохранение...
              </Box>

          </Grid>

      </header>
    )
}