import React from "react";
import DescriptionIcon from '@material-ui/icons/Description';
import {Box, Grid } from "@material-ui/core";
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {useDispatch, useSelector} from "react-redux";
import { TITLE_PAGE_ACTION } from "../../redux/documentRecuder/docAction";
import { useHistory } from "react-router-dom";
import {docReducerTYPE} from "../../redux/store";
import {emitter} from "../../Emitter/emitter";

//@ts-ignore
import autosizeInput from 'autosize-input'


export const Header = () => {

    const [activeSave, setSave] = React.useState(false)
    const { page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()
    const history = useHistory();

    function handleClick() {
        history.push("/");
        window.location.reload()
    }

    React.useEffect(() => {
        emitter.on('SAVE_DATA', save => setSave(save))
    }, [])


    const handleInput = (e : React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value

        autosizeInput(e.currentTarget)

        dispatch(TITLE_PAGE_ACTION(value ? value : 'Новый документ'))
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
            style={{
                padding : '8px 20px',
                flexWrap : 'nowrap',
            }}
          >

              <DescriptionIcon
                  onClick={handleClick}
                  style={{
                      marginRight : '8px',
                      fontSize: 40,
                      color: '#2042d1',
                      cursor : 'pointer'
              }}/>

              <div style={{
                  display : 'flex',
                  alignItems : 'center',
                  overflow : 'hidden',
              }}>
                  <input
                      type="text"
                      spellCheck={"false"}
                      defaultValue={page.title}
                      onInput={handleInput}
                      className="header__doc-title"
                  />

                  <CloudDoneIcon style={{
                      display : !activeSave ? 'block' : 'none',
                      color : "#8d8d8d",
                      fontSize : '20px'
                  }} />

                  <AutorenewIcon
                      style={{
                          display : activeSave ? 'block' : 'none',
                          color : "#0e0e0e",
                          fontSize : '20px'
                      }}
                      className="header__doc-load-animate "
                  />
                  <Box style={{
                      display : activeSave ? 'block' : 'none',
                      fontSize : '14px'
                  }}>
                    Сохранение...
                  </Box>
              </div>

          </Grid>

      </header>
    )
}