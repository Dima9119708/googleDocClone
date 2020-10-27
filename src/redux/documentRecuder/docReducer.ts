import {
    FONT_SIZE, FONT_STYLE, FONT_WEIGHT,
    LINK_PRINT_DOM,
    PADDING_BOTTOM,
    PADDING_LEFT,
    PADDING_RIGHT,
    PADDING_TOP, SAVE_SELECTED_TEXT,
    SET_PAGE_DOM,
    TEXT_DECORATION,
    FONT_FAMILY, STYLES, COLOR, BACKGROUND_COLOR, TEXT_ALIGN, CHANGE_STYLE, RANGE
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

        case CHANGE_STYLE :

            state.changeStyle = action.changeStyle

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

        case COLOR :

            state.styles.color = action.color

            return {
                ...state
            }

        case BACKGROUND_COLOR :

            state.styles.bg = action.bg

            return {
                ...state
            }

        case TEXT_ALIGN :

            state.styles.textAlign = action.textAlign

            return {
                ...state
            }

        default :
            return { ...state }
    }

}