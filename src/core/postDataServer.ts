import * as firebase from "firebase";
import { userID, generateDate} from "./different";
import {debounce} from "debounce";

export const POST_LIST = (key : string, title : string) => {

    debounce(() => {

        const id = userID()

        firebase
            .database()
            .ref(`/docReact/${id}/list/${key}`)
            .set({
                name : title,
                id : key,
                date : generateDate,
                change : Date.now().toString()
            })

    }, 300)()
}

export const POST_DATA_USER = (key : string, page : object) => {

    debounce(() => {

        const id = userID()

        firebase
            .database()
            .ref(`/docReact/${id}/docsDATA/${key}`)
            .set(page)

    }, 300)()

}