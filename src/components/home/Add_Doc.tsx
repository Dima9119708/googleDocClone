import {Box, Container} from "@material-ui/core";
import React from "react";

export const AddDoc : React.FC = () => {

    return (
        <Box style={{
            padding : '20px 0',
            backgroundColor : '#F1F3F4'
        }}
        >
            <Container
                maxWidth="md"
            >

                <Box className="add__doc-plus" />
                <Box
                    component="h3"
                    className="add__doc-title"
                >Пустой файл</Box>

            </Container>
        </Box>
    )
}
