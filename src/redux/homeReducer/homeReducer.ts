import {SET_SORT} from "./homeConstants";

export type InitialStateTYPE = {
    sort : string
}

type ActionTYPE = {
    type : string,
    payload : string | number
}

const initialState : InitialStateTYPE = {
    sort : 'По названию'
}

export function homeReducer(state = initialState, action : ActionTYPE) {

    switch (action.type) {

        case SET_SORT :

            return {
                ...state,
                sort : action.payload
            }

        default :
            return { ...state }
    }
}