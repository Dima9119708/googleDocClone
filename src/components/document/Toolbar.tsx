import React from "react";
import {Box, Grid} from "@material-ui/core";
import {Scale} from "./toolbar.components/Scale";
import {Styles} from "./toolbar.components/Styles";
import {Fonts} from "./toolbar.components/Fonts";
import {FontSize} from "./toolbar.components/FontSize";
import {TypesAndColors} from "./toolbar.components/TypesAndColors";
import {TextAlignment} from "./toolbar.components/TextAlignment";
import {LoadImage} from "./toolbar.components/LoadImage";
import {LineSpacing} from "./toolbar.components/LineSpacing";

export const Toolbar = () => {
    return (<menu style={{
              position: 'fixed',
              padding : '5px 0',
              top : 70 + 'px',
              width : '100%',
              maxWidth : '1920px',
              margin : '0 auto',
              backgroundColor : '#fff',
              borderBottom : '1px solid gray'
          }}>

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

             <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                 <Fonts />
             </Box>

             <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                 <FontSize />
             </Box>

             <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                 <TypesAndColors />
             </Box>

             <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                 <TextAlignment />
             </Box>

             <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                 <LoadImage />
             </Box>

             <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                 <LineSpacing />
             </Box>

         </Grid>

    </menu>)
}