import {
    LINK_PRINT_DOM,
    PADDING_BOTTOM,
    PADDING_LEFT,
    PADDING_RIGHT,
    PADDING_TOP,
    SET_PAGE_DOM
} from "./docConstants";


const initialState = {
    divPage : null,
    linkPrintDom : null,
    page : {
        paddingTop : 20,
        paddingBottom : 20,
        paddingLeft : 20,
        paddingRight : 20,
    }
}

export type InitialStateDoc = typeof initialState

export function docReducer(state = initialState, action : any) {

    switch (action.type) {

        case LINK_PRINT_DOM :

            return {
                ...state,
                linkPrintDom : action.DOM
            }

        case SET_PAGE_DOM :

            return {
                ...state,
                divPage : action.DOM
            }

        case PADDING_TOP :

            state.page.paddingTop = action.height

            return {
                ...state,
            }

        case PADDING_BOTTOM :

            state.page.paddingBottom = action.height

            return {
                ...state,
            }

        case PADDING_LEFT :

            state.page.paddingLeft = action.width

            return {
                ...state,
            }

        case PADDING_RIGHT :

            state.page.paddingRight = action.width

            return {
                ...state,
            }

        default :
            return { ...state }
    }

}