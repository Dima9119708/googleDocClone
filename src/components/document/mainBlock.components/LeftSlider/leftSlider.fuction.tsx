import React from "react";
import {paddingBottom, paddingTop} from "../../MainBlock";

export const handleMouseLeftSlide = (
                       e : React.MouseEvent,
                       $lowerSlide : React.MutableRefObject<HTMLDivElement | null>,
                       divPage : HTMLDivElement | null,
                       dispatchCallback : (side : string, height : number) => void) => {

    const target = e.currentTarget as HTMLDivElement
    const pos = target.getBoundingClientRect()

    const pagePadding = paddingTop
    const heightPage = divPage!.scrollHeight

    const lowerSlideDiv = $lowerSlide.current! as HTMLDivElement
    const lowerSlideDivHeight = +lowerSlideDiv.style.height.split('px')[0]

    const calcMaxHeight = heightPage - lowerSlideDivHeight - 200

    let flagDifference = true
    let difference = 0
    let heightCalc = 0

    document.onmousemove = (e) => {

        if (pos.bottom > e.y) {
            if (flagDifference) {
                difference = pos.bottom - e.y
                flagDifference = false
            }
        }

        const delta = (e.y + difference) - pos.bottom
        heightCalc = pos.height + delta

        if (heightCalc > pagePadding + 5 && heightCalc < calcMaxHeight) {
            target.style.height = `${ heightCalc }px`
        }
    }

    document.onmouseup = (e) => {

        document.onmousemove = null
        document.onmouseup = null

        const currentHeight = target.getBoundingClientRect()
        const result = currentHeight.height - pagePadding

        dispatchCallback('lower', result)
    }
}

export const handleMouseRightSlide = (
                              e : React.MouseEvent,
                              $upperSlide : React.MutableRefObject<HTMLDivElement | null> ,
                              divPage : HTMLDivElement | null,
                              dispatchCallback : (side : string, height : number) => void) => {

    const target = e.currentTarget as HTMLDivElement
    const pos = target.getBoundingClientRect()

    const pagePadding = paddingBottom
    const heightPage = divPage!.scrollHeight

    const upperSlideDiv = $upperSlide.current! as HTMLDivElement
    const upperSlideDivHeight = +upperSlideDiv.style.height.split('px')[0]
    const calcMaxHeight = heightPage - upperSlideDivHeight - 200

    let flagDifference = true
    let difference = 0
    let heightCalc = 0

    document.onmousemove = (e) => {

        if (pos.bottom > e.y) {
            if (flagDifference) {
                difference = pos.bottom - e.y
                flagDifference = false
            }
        }

        const delta = (e.y + difference) - pos.bottom
        heightCalc = delta < 0 ? pos.height + Math.abs(delta) : pos.height - delta

        if (heightCalc > pagePadding + 5 && heightCalc < calcMaxHeight) {
            target.style.height = `${ heightCalc }px`
        }
    }

    document.onmouseup = (e) => {

        document.onmousemove = null
        document.onmouseup = null

        const currentHeight = target.getBoundingClientRect()
        const result = currentHeight.height - pagePadding

        dispatchCallback('upper', result)
    }
}