import {combineReducers, createStore} from 'redux'
import {homeReducer, InitialStateTYPE} from "./homeReducer/homeReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export type homeReducerTYPE = {
    homeReducer : InitialStateTYPE
}

export const store = createStore(
    combineReducers({
        homeReducer

    }),
    composeWithDevTools() )