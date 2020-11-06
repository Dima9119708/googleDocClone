import React from "react";
import {Header} from "../components/document/Header";
import { Toolbar } from "../components/document/Toolbar";
import {MainBlock} from "../components/document/MainBlock";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../redux/store";
import { useParams } from "react-router-dom";
import * as firebase from "firebase";
import { PAGE_SERVER_DATA_ACTION } from "../redux/documentRecuder/docAction";
import {Preloader} from "../components/home/Preloader";
import {POST_LIST, POST_DATA_USER} from "../core/postDataServer";
import {userID} from "../core/different";
import {emitter} from "../Emitter/emitter";


export const Document = () => {

    const [ getDataServer, setDATA] = React.useState(false)
    const { key } = useParams();
    const { page, divPage } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()


    React.useEffect(() => {

        ;( async () => {
            await firebase
                .database()
                .ref(`/docReact/${userID()}/docsDATA/${key}/`)
                .once('value')
                .then(value => {
                    const val = value.val() ? value.val() : {};
                    dispatch(PAGE_SERVER_DATA_ACTION(val));
                    setDATA(true)
                })
        })();

    }, [])


    React.useEffect(() => {

        if(divPage) {

            let prevHTML = ''

            const $page = divPage! as HTMLDivElement
            const currentHTML = $page.children[0].innerHTML
            const pageDataJSON = JSON.stringify(page)

            prevHTML = currentHTML + pageDataJSON

            setInterval(() => {

                const currentHTML = $page.children[0].innerHTML
                const pageDataJSON = JSON.stringify(page)

                if (prevHTML !== currentHTML + pageDataJSON ) {

                    POST_LIST(key, page.title)
                    POST_DATA_USER(key, { ...page, innerHTML : currentHTML})

                    emitter.emit('SAVE_DATA', true)
                }
                else {
                    emitter.emit('SAVE_DATA', false)
                }

                prevHTML = currentHTML + pageDataJSON

            }, 300)
        }

    }, [divPage])


    if(!getDataServer) {
        return <>
            <div style={{
                position : 'relative',
                padding : '20px 20px',
                width : 100
            }}>
                <Preloader height={'20px'} width={'20px'} />
            </div>
            <Toolbar />
            <div style={{
                position : 'absolute',
                top : 0,
                left : 0,
                right : 0,
                bottom : 0,
                zIndex : 999,
            }}>
                <Preloader height={'50px'} width={'50px'} />
            </div>
        </>
    }


    return (
        <>
            <Header />
            <Toolbar />
            <MainBlock />
        </>
    )

}