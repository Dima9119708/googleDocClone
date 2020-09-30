import React from "react";
import {Box, Grid} from "@material-ui/core";
import {Scale} from "./toolbar.components/Scale";
import {Styles} from "./toolbar.components/Styles";

export const Toolbar = () => {
    return (<>
        <menu
          style={{
              position: 'fixed',
              padding : '5px 0',
              top : 70 + 'px',
              left : 0,
              width : '100%',
              backgroundColor : '#fff',
              borderBottom : '1px solid gray'
          }}
        >
         <Grid
            container
            alignItems="center"
            style={{
               padding : '0 20px'
            }}
         >

             <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                <Scale />
             </Box>

             <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                 <Styles />
             </Box>

         </Grid>

        </menu>
    </>)
}