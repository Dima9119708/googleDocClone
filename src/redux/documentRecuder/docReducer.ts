import {
    CHANGE_TEXT, FONT_SIZE, FONT_STYLE, FONT_WEIGHT,
    LINK_PRINT_DOM,
    PADDING_BOTTOM,
    PADDING_LEFT,
    PADDING_RIGHT,
    PADDING_TOP, SAVE_SELECTED_TEXT,
    SET_PAGE_DOM,
    TEXT_DECORATION,
    FONT_FAMILY
} from "./docConstants";


export const defaultPageStyle = {
    fontSize : '14',
    fontWeight : 'normalWeight',
    fontStyle : 'normalItalic',
    textDecoration : 'noneUnderline',
    fontFamily : 'Roboto'
}

export type defaultPageStyleType = typeof defaultPageStyle

const initialState = {
    divPage : null,
    linkPrintDom : null,
    changeText : false,
    page : {
        paddingTop : 90,
        paddingBottom : 90,
        paddingLeft : 90,
        paddingRight : 90,
        innerHTML : ''
    },
    styles : {
        ...defaultPageStyle,
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

        case CHANGE_TEXT :

            state.changeText = action.changeText

            return {
                ...state,
            }

        case FONT_SIZE :

            state.styles.fontSize = action.fontSize

            return {
                ...state
            }

        case FONT_WEIGHT :

            state.styles.fontWeight = action.fontWeight

            return {
                ...state
            }

        case FONT_STYLE :

            state.styles.fontStyle = action.fontStyle

            return {
                ...state
            }

        case TEXT_DECORATION :

            state.styles.textDecoration = action.textDecoration

            return {
                ...state
            }

        case FONT_FAMILY :

            state.styles.fontFamily = action.fontFamily

            return {
                ...state
            }

        default :
            return { ...state }
    }

}