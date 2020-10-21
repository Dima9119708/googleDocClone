import {Box, Container} from "@material-ui/core";
import React from "react";
import {SET_NEW_DOC_ACTION} from "../../redux/homeReducer/homeAction";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";

export const AddDoc : React.FC = () => {

    const dispatch = useDispatch()

    const addMonths : string[] = ['Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек'
    ]

    const formatMonth = (month : string) => {
        return month[0].toLowerCase() + month.slice(1, month.length)
    }

    const generateKey = Date.now().toString()

    const addNewDoc = () => {

        const date = new Date().toLocaleDateString()
        const month = new Date().getMonth()
        const parseDate = date.split(".")

        const generateDate = `${parseDate[0]} ${formatMonth(addMonths[month])}. ${parseDate[2]} г.`

        dispatch(SET_NEW_DOC_ACTION('Новый документ', generateDate, generateKey))

    }

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
                    to={'/doc/' + generateKey}
                >
                    <Box
                        onClick={addNewDoc}
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
