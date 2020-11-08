import React from "react";
import { useHistory } from "react-router-dom";
import {docReducerTYPE} from "../../redux/store";
import {Grid } from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import {useDispatch, useSelector} from "react-redux";
import { TITLE_PAGE_ACTION } from "../../redux/documentRecuder/docAction";
import {home} from "../../core/link";
//@ts-ignore
import autosizeInput from 'autosize-input'



export const Header = () => {

    const { page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()
    const history = useHistory();

    const handleClick = () => history.push(home)

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

              </div>

          </Grid>

      </header>
    )
}