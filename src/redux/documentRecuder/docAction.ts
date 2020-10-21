import {LINK_PRINT_DOM, SET_PAGE_DOM, PADDING_LEFT, PADDING_RIGHT, PADDING_TOP, PADDING_BOTTOM} from "./docConstants";


type LINK_PRINT_DOM_TYPE = {
    type : typeof LINK_PRINT_DOM,
    DOM : HTMLDivElement
}
export const LINK_PRINT_DOM_ACTION = (DOM : HTMLDivElement) : LINK_PRINT_DOM_TYPE => {

    return {
        type : LINK_PRINT_DOM,
        DOM
    }
}


type SET_PAGE_DOM_TYPE = {
    type : typeof SET_PAGE_DOM,
    DOM : HTMLDivElement
}
export const SET_PAGE_DOM_ACTION = (DOM : HTMLDivElement) : SET_PAGE_DOM_TYPE => {
    return {
        type : SET_PAGE_DOM,
        DOM
    }
}


type PADDING_LEFT_TYPE = {
    type : typeof PADDING_LEFT,
    width : number
}
export const PADDING_LEFT_ACTION = (width : number) : PADDING_LEFT_TYPE => {
    return {
        type : PADDING_LEFT,
        width
    }
}


type PADDING_RIGHT_TYPE = {
    type : typeof PADDING_RIGHT,
    width : number
}
export const PADDING_RIGHT_ACTION = (width : number) : PADDING_RIGHT_TYPE => {
    return {
        type : PADDING_RIGHT,
        width
    }
}


type PADDING_TOP_TYPE = {
    type : typeof PADDING_TOP,
    height : number
}
export const PADDING_TOP_ACTION = (height : number) : PADDING_TOP_TYPE => {
    return {
        type : PADDING_TOP,
        height
    }
}


type PADDING_BOTTOM_TYPE = {
    type : typeof PADDING_BOTTOM,
    height : number
}
export const PADDING_BOTTOM_ACTION = (height : number) : PADDING_BOTTOM_TYPE => {
    return {
        type : PADDING_BOTTOM,
        height
    }
}




















