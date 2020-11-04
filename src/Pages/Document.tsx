import React from "react";
import {Header} from "../components/document/Header";
import { Toolbar } from "../components/document/Toolbar";
import {MainBlock} from "../components/document/MainBlock";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../redux/store";
import { useParams } from "react-router-dom";
import * as firebase from "firebase";
import { PAGE_SERVER_DATA_ACTION } from "../redux/documentRecuder/docAction";


const formatMonth = (month : string) => {
    return month[0].toLowerCase() + month.slice(1, month.length)
}

const addMonths : string[] = [
    'Янв',
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

const date = new Date().toLocaleDateString()
const month = new Date().getMonth()
const parseDate = date.split(".")
const generateDate = `${parseDate[0]} ${formatMonth(addMonths[month])}. ${parseDate[2]} г.`
const userID = localStorage.getItem('googleReactKey')

export const Document = () => {

    const [ getDataServer, setDATA] = React.useState(false)
    const { key } = useParams();
    const { page, linkPrintDom } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()


    React.useEffect(() => {

        ;( async () => {
            await firebase
                .database()
                .ref(`/docReact/${userID}/docsDATA/${key}/`)
                .on('value', value => {

                    const val = value.val() ? JSON.parse(value.val()) : {};
                    dispatch(PAGE_SERVER_DATA_ACTION(val));
                    setDATA(true)

                })
        })();

    }, [])


    React.useEffect(() => {

        if (getDataServer) {

            firebase.database()
                .ref(`/docReact/${userID}/list/${key}`)
                .set({
                    name : page.title,
                    id : key,
                    date : generateDate
                })

            firebase.database()
                 .ref(`/docReact/${userID}/docsDATA/${key}`)
                 .set( JSON.stringify(page) )

        }

    }, [
        page.lineHeight,
        page.paddingRight,
        page.paddingLeft,
        page.paddingBottom,
        page.paddingTop,
        page.innerHTML,
        page.title,
    ])

    return (
        <>
            <Header />
            <Toolbar />
            <MainBlock />
        </>
    )

}