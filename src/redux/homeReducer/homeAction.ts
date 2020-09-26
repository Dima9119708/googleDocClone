import {SET_SORT} from "./homeConstants";

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