import {
    LINK_PRINT_DOM,
    PADDING_BOTTOM,
    PADDING_LEFT,
    PADDING_RIGHT,
    PADDING_TOP,
    SET_PAGE_DOM,
    RANGE,
    LINE_HEIGHT,
    HEADER_SLIDE_DOM,
    TARGET_NODE,
    IMAGE
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
    headerSlideDom : null,
    linkPrintDom : null,
    targetNode : null,
    changeStyle : false,
    image : false,
    page : {
        minHeight : 1200,
        width : 800,
        paddingTop : 90,
        paddingBottom : 90,
        paddingLeft : 90,
        paddingRight : 90,
        lineHeight : 1.2,
        innerHTML : '',
    },
    range : {},
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

        case TARGET_NODE :

            return {
                ...state,
                targetNode : action.DOM
            }

        case HEADER_SLIDE_DOM :

            return {
                ...state,
                headerSlideDom : action.DOM
            }

        case RANGE :

            return {
                ...state,
                range : action.range
            }

        case IMAGE :

            return {
                ...state,
                image : action.flag
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

        case LINE_HEIGHT :

            state.page.lineHeight = action.lineHeight

            return {
                ...state,
            }

        default :
            return { ...state }
    }

}