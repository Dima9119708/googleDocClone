import {Box, Container} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { documentPage } from "../../core/link";


export const AddDoc : React.FC = () => {

    const generateKey = Date.now().toString()


    return (
        <Box style={{
            padding : '20px 0',
            backgroundColor : '#F1F3F4'
        }}
        >
            <Container
                maxWidth="md"
            >

                <Link
                    to={documentPage + generateKey}
                >
                    <Box
                        className="add__doc-plus"
                    />
                </Link>
                <Box
                    component="h3"
                    className="add__doc-title"
                >
                    Пустой файл
                </Box>

            </Container>
        </Box>
    )
}
