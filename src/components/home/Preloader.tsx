import {FC} from "react";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import {Box} from "@material-ui/core";


type PreloaderTYPE = {
    height : string,
    width : string
}

export const Preloader : FC<PreloaderTYPE> = ({height, width}) => {

    return (
        <Box
            style={{
                position : "absolute",
                top : '50%',
                left : '50%',
                transform : 'translate(-50%, -50%)'
            }}
        >

        <CircularProgress
            style={{
                position : "absolute",
                height,
                width
            }}
        />

    </Box>)
}