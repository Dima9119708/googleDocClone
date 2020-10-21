import React from "react";

export const handleMouseLeftSlide = (
                       e : React.MouseEvent,
                       $lowerSlide : React.MutableRefObject<HTMLDivElement | null>,
                       divPage : HTMLDivElement | null,
                       dispatchCallback : (side : string, height : number) => void) => {

    const target = e.currentTarget as HTMLDivElement
    const pos = target.getBoundingClientRect()
    const height = +target.style.height.split('px')[0]

    const pagePadding = +divPage!.style.paddingTop.split('px')[0]
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
        heightCalc = height + delta

        if (heightCalc > pagePadding + 5 && heightCalc < calcMaxHeight) {
            target.style.height = `${ heightCalc }px`
        }
    }

    document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
        const currentHeight = +target.style.height.split('px')[0]
        const result = currentHeight - pagePadding
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
    const height = +target.style.height.split('px')[0]

    const pagePadding = +divPage!.style.paddingBottom.split('px')[0]
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
        heightCalc = delta < 0 ? height + Math.abs(delta) : height - delta

        if (heightCalc > pagePadding + 5 && heightCalc < calcMaxHeight) {
            target.style.height = `${ heightCalc }px`
        }
    }

    document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
        const currentHeight = +target.style.height.split('px')[0]
        const result = currentHeight - pagePadding
        dispatchCallback('upper', result)
    }
}