import React from "react";
import {Box} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export const MainBlock = () => {
    return (<>
        <Box style={{
                position : 'fixed',
                top : '117px',
                height : '15px',
                width : '100%',
                maxWidth : '1920px',
                backgroundColor : '#e1e1e1',
                borderBottom : '1px solid #000',
                borderTop : '1px solid #000',
            }}
        >
            <Box
                style={{
                    position: "relative",
                    height : '13px',
                    maxWidth : '800px',
                    margin : '0 auto',
                    backgroundColor : '#ffffff'
                }}
            >
                <Box style={{
                        position : "absolute",
                        left : 0,
                        top : 0,
                        height : '14px',
                        width : '20px',
                        cursor : 'col-resize',
                        backgroundColor : '#959595'
                    }}
                />

                <Box style={{
                        position : "absolute",
                        right : 0,
                        top : 0,
                        height : '14px',
                        width : '20px',
                        cursor : 'col-resize',
                        backgroundColor : '#959595'
                    }}
                />

                <Box style={{
                    position : "absolute",
                    left : 15,
                    top : -8,
                    zIndex : 99,
                    cursor : 'col-resize',
                }}>
                    <ArrowDropDownIcon style={{ fontSize : '30px', color : '#1585d7'}} />
                </Box>

                <Box style={{
                    position : "absolute",
                    right : 15,
                    top : -8,
                    zIndex : 99,
                    cursor : 'col-resize',
                }}>
                    <ArrowDropDownIcon style={{ fontSize : '30px', color : '#1585d7'}} />
                </Box>

            </Box>

        </Box>

        <Box
            style={{
                position : 'absolute',
                top : '130px',
                minHeight : '100%',
                width : '100%',
                maxWidth : '1920px',
                zIndex : -1,
                padding : '20px 0',
                backgroundColor :'rgb(228,228,228,.4)',
                borderBottom : '1px solid #000',
            }}
        >
            <Box style={{
                position : 'absolute',
                top : 0,
                left : 0,
                height : '100%',
                width : 15,
                backgroundColor : '#ffffff',
                borderRight : '1px solid gray'
            }}>

                <Box style={{
                    position : "absolute",
                    left : 0,
                    top : 0,
                    height : '50px',
                    width : 15,
                    cursor : 'row-resize',
                    zIndex : 5,
                    backgroundColor : '#959595'
                }}
                />

                <Box style={{
                    position : "absolute",
                    bottom : 0,
                    left : 0,
                    height : '50px',
                    width : 15,
                    cursor : 'row-resize',
                    backgroundColor : '#959595'
                }}/>

            </Box>

            <Box style={{
                    height : '1200px',
                    width : '100%',
                    maxWidth : '800px',
                    margin : '0 auto',
                    backgroundColor : '#ffffff',
                    boxShadow: 'rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
            }}/>

        </Box>

    </>)
}