import {
    LINK_PRINT_DOM,
    PADDING_BOTTOM,
    PADDING_LEFT,
    PADDING_RIGHT,
    PADDING_TOP,
    SET_PAGE_DOM,
    RANGE
} from "./docConstants";


export const defaultPageStyle = {
    fontSize : '16',
    fontSizeView : '16',
    fontWeight : '400',
    fontStyle : 'normal',
    textDecoration : 'none',
    fontFamily : 'Roboto',
    color : '#000',
    bg : '#fff',
    textAlign : 'left'
}

export type defaultPageStyleType = typeof defaultPageStyle

const initialState = {
    divPage : null,
    linkPrintDom : null,
    changeStyle : false,
    page : {
        paddingTop : 90,
        paddingBottom : 90,
        paddingLeft : 90,
        paddingRight : 90,
        innerHTML : '',
    },
    range : {},
    styles : {...defaultPageStyle}
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

        case RANGE :

            return {
                ...state,
                range : action.range
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