import * as firebase from "firebase";
import 'firebase/database';
import { userID, generateDate} from "./different";
import {debounce} from "debounce";

export const POST_LIST = (key : string, title : string) => {

    debounce(() => {

        firebase
            .database()
            .ref(`/docReact/${userID()}/list/${key}`)
            .set({
                name : title,
                id : key,
                date : generateDate,
                change : Date.now().toString()
            })

    }, 200)()
}

export const POST_DATA_USER = (key : string, page : object) => {

    debounce(() => {

        firebase
            .database()
            .ref(`/docReact/${userID()}/docsDATA/${key}`)
            .set(page)

    }, 200)()
}
