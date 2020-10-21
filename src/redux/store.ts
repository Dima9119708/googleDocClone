import {combineReducers, createStore} from 'redux'
import {homeReducer, InitialStateTYPE} from "./homeReducer/homeReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {docReducer, InitialStateDoc} from "./documentRecuder/docReducer";

export type homeReducerTYPE = {
    homeReducer : InitialStateTYPE,
}

export type docReducerTYPE = {
    docReducer : InitialStateDoc
}

export const store = createStore(
    combineReducers({
        homeReducer,
        docReducer
    }),
    composeWithDevTools() )