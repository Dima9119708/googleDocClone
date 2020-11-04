import {SET_DATA, SET_DELETE_DOC_LIST, SET_NEW_DOC, SET_NEW_NAME, SET_SORT} from "./homeConstants";


type ActionTYPE = {
    type : string,
    payload : string | number
    title : string,
    date : string
    key : string
}

type dataUserObjectType = {
    name : string,
    id : string
    date : string
}

type dataUserTYPE = {
    [key : string] : dataUserObjectType
}

export type InitialStateTYPE = {
    sort : string,
    dataUser : dataUserTYPE | null
}

const initialState : InitialStateTYPE = {
    sort : 'По названию',
    dataUser : null
}

export function homeReducer(state = initialState, action : ActionTYPE) {

    switch (action.type) {

        case SET_SORT :

            return {
                ...state,
                sort : action.payload
            }

        case SET_DATA :

            return {
                ...state,
                dataUser : action.payload
            }

        case SET_NEW_DOC :

            return {
                ...state,
                dataUser : {
                    ...state.dataUser,
                    [action.key] : {
                        title : action.title,
                        date : action.date
                    }
                }
            }

        case SET_DELETE_DOC_LIST :

            const stateDataUser = {...state.dataUser}
            delete stateDataUser[action.payload]

            return {
                ...state,
                dataUser : stateDataUser
            }

        case SET_NEW_NAME :

            const stateUserData = {...state.dataUser}
            stateUserData[action.key].name = action.title

            return {
                ...state,
                dataUser : {...stateUserData}
            }

        default :
            return { ...state }
    }
}