import {
    LINK_PRINT_DOM,
    SET_PAGE_DOM,
    PADDING_LEFT,
    PADDING_RIGHT,
    PADDING_TOP,
    PADDING_BOTTOM,
    LINE_HEIGHT,
    IMAGE,
    TITLE,
    PAGE_SERVER_DATA
} from "./docConstants";


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


type TITLE_PAGE_TYPE = {
    type : typeof TITLE,
    title : string
}
export const TITLE_PAGE_ACTION = (title : string) : TITLE_PAGE_TYPE => {

    return {
        type : TITLE,
        title
    }
}

type PAGE_SERVER_DATA_TYPE = {
    type : typeof PAGE_SERVER_DATA,
    data : object
}
export const PAGE_SERVER_DATA_ACTION = (data : object) : PAGE_SERVER_DATA_TYPE => {

    return {
        type : PAGE_SERVER_DATA,
        data
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

type LINE_HEIGHT_TYPE = {
    type : typeof LINE_HEIGHT,
    lineHeight : number
}
export const LINE_HEIGHT_ACTION = (lineHeight : number) : LINE_HEIGHT_TYPE => {
    return {
        type : LINE_HEIGHT,
        lineHeight
    }
}


export const IMAGE_ACTION = (flag : boolean) => {
    return {
        type : IMAGE,
        flag
    }
}
