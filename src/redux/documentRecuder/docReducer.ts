import {
    LINK_PRINT_DOM,
    PADDING_BOTTOM,
    PADDING_LEFT,
    PADDING_RIGHT,
    PADDING_TOP,
    SET_PAGE_DOM,
    RANGE,
    LINE_HEIGHT,
    TITLE,
    IMAGE,
    PAGE_INNERHTML, PAGE_SERVER_DATA
} from "./docConstants";



export const defaultPageStyle = {
    fontSize : '16',
    fontSizeView : '16',
    fontWeight : '400',
    fontStyle : 'normal',
    underline : 'none',
    fontFamily : 'Roboto',
    color : '#000',
    bg : '#fff',
    lineThrough : 'none',
    textAlign : 'left'
}

export type defaultPageStyleType = typeof defaultPageStyle

const initialState = {

    divPage : null,
    linkPrintDom : null,
    image : false,
    page : {
        title : 'Новый документ',
        minHeight : 1200,
        width : 800,
        paddingTop : 30,
        paddingBottom : 30,
        paddingLeft : 50,
        paddingRight : 50,
        lineHeight : 1.2,
        innerHTML : '',
    },
    range : {},
}

export type InitialStateDoc = typeof initialState

export function docReducer(state = initialState, action : any) {

    switch (action.type) {


        case PAGE_SERVER_DATA :

            state.page = {...state.page, ...action.data}

            return {
                ...state,
            }

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

        case IMAGE :

            return {
                ...state,
                image : action.flag
            }

        case TITLE :

            state.page.title = action.title

            return {
                ...state,
            }

        case PAGE_INNERHTML :

            state.page.innerHTML = action.innerHTML

            return {
                ...state,
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