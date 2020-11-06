import * as firebase from 'firebase/app';
import 'firebase/database';
import { SET_DATA_ACTION } from '../../redux/homeReducer/homeAction';
import {userID} from "../../core/different";

export function authInApp(dispatch : any) : void {

    const key = userID()

    ;( async () => {
        await firebase.database()
            .ref(`/docReact/${key}/list/`)
            .once('value')
            .then(value => {
                const result = value.val() ? value.val() : {}
                dispatch(SET_DATA_ACTION(result))
            })
    })();
}