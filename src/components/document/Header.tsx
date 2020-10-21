import React from "react";
import DescriptionIcon from '@material-ui/icons/Description';
import {Box, Grid } from "@material-ui/core";
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {Input} from "antd";

export const Header = () => {

    return (
        <header
          style={{
              position : 'fixed',
              padding : '5px 0',
              width : '100%',
              maxWidth : '1920px',
              margin : '0 auto',
              zIndex : 999,
              backgroundColor : '#ffffff',
              borderBottom : '1px solid gray'
          }}
        >
          <Grid
            container
            alignItems="center"
            style={{padding : '8px 20px'}}
          >
              <DescriptionIcon style={{
                  marginRight : '8px',
                  fontSize: '40px',
                  color: '#2042d1'
              }}/>
              <Input
                  defaultValue="Новый документ"
                  style={{marginRight : '10px', width : "12%", fontSize : '16px'}}
              />
              <CloudDoneIcon style={{color : "#8d8d8d", fontSize : '20px'}} />

              <AutorenewIcon
                  style={{color : "#0e0e0e", fontSize : '20px'}}
                  className="header__doc-load-animate "
              />
              <Box
                style={{
                    fontSize : '14px'
                }}
              >
                Сохранение...
              </Box>

          </Grid>

      </header>
    )
}