import React, { MutableRefObject } from "react";
import {widthPage} from "../Page";

export const handleMouseLeftSlide = (
                       e : React.MouseEvent,
                       rightSlide : MutableRefObject<null>,
                       dispatchCallback : (side : string, width : number) => void ) => {

    const target = e.currentTarget as HTMLDivElement
    const pos = target.getBoundingClientRect()
    const width = +target.style.width.split('px')[0]

    const rightSlideDiv = rightSlide.current! as HTMLDivElement
    const rightSlideDivWidth = +rightSlideDiv.style.width.split('px')[0]
    const rightSlidePadding = widthPage - rightSlideDivWidth - 100

    let flagDifference = true
    let difference = 0
    let widthCalc = 0

    document.onmousemove = (e) => {

        if (pos.right > e.x) {
            if (flagDifference) {
                difference = pos.right - e.x
                flagDifference = false
            }
        }

        const delta = (e.x + difference) - pos.right
        widthCalc = width + delta

        if ( widthCalc > 5 && widthCalc < rightSlidePadding ) {
            target.style.width = `${ widthCalc }px`
        }
    }

    document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
        flagDifference = true
        const width = +target.style.width.split('px')[0]
        dispatchCallback('left', width)
    }
}

export const handleMouseRightSlide = (
                        e : React.MouseEvent,
                        leftSlide : MutableRefObject<null>,
                        dispatchCallback : (side : string, width : number) => void ) => {

    const target = e.currentTarget as HTMLDivElement
    const pos = target.getBoundingClientRect()
    const width = +target.style.width.split('px')[0]

    const leftSlideDiv = leftSlide.current! as HTMLDivElement
    const leftSlideDivWidth = +leftSlideDiv.style.width.split('px')[0]
    const leftSlideWidth = widthPage - leftSlideDivWidth - 100

    let flagDifference = true
    let difference = 0
    let widthCalc = 0

    document.onmousemove = (e) => {

        if (pos.left < e.x) {
            if (flagDifference) {
                difference = pos.left - e.x
                flagDifference = false
            }
        }

        const delta = (e.x + difference) - pos.left
        widthCalc = delta < 0 ? width + Math.abs(delta) : width - delta

        if ( widthCalc > 5 && widthCalc < leftSlideWidth) {
            target.style.width = `${widthCalc}px`
        }
    }

    document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
        flagDifference = false
        const width = +target.style.width.split('px')[0]
        dispatchCallback('right', width)
    }
}
