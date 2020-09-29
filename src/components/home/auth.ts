import * as firebase from 'firebase/app';
import 'firebase/database';
import { SET_DATA_ACTION } from '../../redux/homeReducer/homeAction';

export function authInApp(dispatch : any) : void {

    const key = window.localStorage.getItem('googleReactKey')

    if (!key) {

        const idKey = Date.now()
        window.localStorage.setItem('googleReactKey', idKey.toString())
        dispatch(SET_DATA_ACTION({}))

        return
    }

    ;( async () => {
        await firebase.database()
            .ref(`/docReact/${key}`)
            .on('value', function (value) {

                const result = value.val() ? value.val() : {}
                dispatch(SET_DATA_ACTION(result))

            })
    })();
}