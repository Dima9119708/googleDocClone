import {SET_DATA, SET_DELETE_DOC_LIST,SET_NEW_NAME, SET_SORT} from "./homeConstants";
import { RANGE } from "../documentRecuder/docConstants";

type SET_SORT_AC_TYPE = {
    type : typeof SET_SORT,
    payload : string
}
export const SET_SORT_AC = (payload : string) : SET_SORT_AC_TYPE => {

    return {
        type : SET_SORT,
        payload
    }
}


type SET_DATA_ACTION_TYPE = {
    type : typeof SET_DATA,
    payload : object
}
export const SET_DATA_ACTION = (payload : object) : SET_DATA_ACTION_TYPE => {

    return {
        type : SET_DATA,
        payload
    }
}

export const RANGE_ACTION = (range : Range | object) => {
    return {
        type : RANGE,
        range
    }
}

type SET_DELETE_DOC_LIST_TYPE = {
    type : typeof SET_DELETE_DOC_LIST,
    payload : string
}
export const SET_DELETE_DOC_LIST_ACTION = (payload : string) : SET_DELETE_DOC_LIST_TYPE => {

    return {
        type : SET_DELETE_DOC_LIST,
        payload
    }
}


type SET_NEW_NAME_TYPE = {
    type : typeof SET_NEW_NAME,
    title : string,
    key : string
}
export const SET_NEW_NAME_ACTION = (title : string, key : string) : SET_NEW_NAME_TYPE => {

    return {
        type : SET_NEW_NAME,
        title,
        key
    }
}