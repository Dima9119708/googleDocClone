import React from "react";
import {Box} from "@material-ui/core";
import {Scale} from "./toolbar.components/Scale";
import {Titles} from "./toolbar.components/Titles";
import {Fonts} from "./toolbar.components/Fonts";
import {TextAlignment} from "./toolbar.components/TextAlignment";
import {LoadImage} from "./toolbar.components/LoadImage";
import {LineHeight} from "./toolbar.components/LineHeight";
import {FontWeight} from "./toolbar.components/FontWeight";
import {FontStyle} from "./toolbar.components/FontStyle";
import {TextDecoration} from "./toolbar.components/TextDecoration";
import {Color} from "./toolbar.components/Color";
import {BackgroundColor} from "./toolbar.components/BackgroundColor";
import {Print} from "./toolbar.components/Print";
import {FontSize} from "./toolbar.components/FontSize";
import {ImageAlign} from "./toolbar.components/ImageAlign";
import {Float} from "./toolbar.components/Float";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../redux/store";


export const Toolbar = () => {

    const { image } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)

    return (
        <menu style={{
              padding : '10px 0',
              minHeight : '55px',
              backgroundColor : '#fff',
              display : 'flex',
              alignItems: "center",
        }}>

             <Box style={{ padding : '0 10px', borderRight : '1px solid #696969', cursor : 'pointer'}} >
                 <Print />
             </Box>

             <div style={{
                    display : !image ? 'flex' : 'none',
                    alignItems: "center",
                }}>

                 <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                     <Titles />
                 </Box>

                 <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                     <Fonts />
                 </Box>

                 <Box style={{ padding : '0 10px', borderRight : '1px solid #696969'}} >
                     <FontSize />
                 </Box>

                 <Box style={{ padding : '0 10px', borderRight : '1px solid #696969', cursor : 'pointer'}} >
                     <FontWeight />
                     <FontStyle />
                     <TextDecoration />
                     <Color />
                     <BackgroundColor />
                 </Box>

                 <Box style={{ padding : '0 10px', borderRight : '1px solid #696969', cursor : 'pointer'}} >
                     <TextAlignment />
                 </Box>

                 <Box style={{ padding : '0 10px', borderRight : '1px solid #696969', cursor : 'pointer'}} >
                     <LoadImage />
                 </Box>

                 <Box style={{ padding : '0 10px', borderRight : '1px solid #696969', cursor : 'pointer'}} >
                     <LineHeight />
                 </Box>

             </div>

             <div style={{
                     display : image ? 'flex' : 'none',
                     alignItems: "center",
                 }}>

                 <Box style={{ padding : '0 10px', borderRight : '1px solid #696969', cursor : 'pointer'}} >
                    <ImageAlign />
                 </Box>

                 <Box style={{ padding : '0 10px', borderRight : '1px solid #696969', cursor : 'pointer'}} >
                     <Float />
                 </Box>

             </div>
    </menu>)
}