import {SET_DATA, SET_DELETE_DOC_LIST, SET_NEW_NAME, SET_SORT} from "./homeConstants";


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
    date : string,
    change : string
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

            if (action.payload === 'По дате просмотра') {

                const data = Object.keys(state.dataUser!)
                                .map(item => state.dataUser![item])
                                .sort((a,b) => {
                                    if ( a.change > b.change ){
                                        return -1;
                                    }
                                    if ( a.change < b.change ){
                                        return 1;
                                    }
                                    return 0;
                                })
                                .reduce((acc : any , item) => {
                                    acc[item.id] = item
                                    return acc
                                } ,{})


                state.dataUser = {...data}
            }
            else if (action.payload === 'По названию') {

                const data = Object.keys(state.dataUser!)
                            .map(item => state.dataUser![item])
                            .sort((a,b) => {
                                if ( a.name < b.name ){
                                    return -1;
                                }
                                if ( a.name > b.name ){
                                    return 1;
                                }
                                return 0;
                            })
                            .reduce((acc : any, item) => {
                                acc[item.id] = item
                                return acc
                            }, {})

                state.dataUser = {...data}
            }

            return {
                ...state,
                sort : action.payload
            }

        case SET_DATA :

            return {
                ...state,
                dataUser : action.payload
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