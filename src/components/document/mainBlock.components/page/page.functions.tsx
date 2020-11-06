import {$stylesElem} from "./Page";
import {emitter} from "../../../../Emitter/emitter";

export function formatGetFontFamily(fontFamily : string) {

    const getFont = fontFamily.split(',')[0]

    return getFont.startsWith('"')
             ? getFont.substr(1, getFont.length - 2)
             : getFont
}


export function setStyles(range : object, comand : string, value : string = '') {

    if (range instanceof Range) {
        const selection = document.getSelection()!
        selection.removeAllRanges();
        selection.addRange(range)

        const start = selection.anchorOffset
        const end = selection.focusOffset

        if (start !== end) {
            document.execCommand(comand, false, value)
        }
        else {
            $stylesElem.push( {comand, value} )
            $stylesElem.forEach(item => {
                document.execCommand(item.comand, false, item.value)
            })
        }
    }
}


export function resizeImage(target : HTMLDivElement) {

    const rightCenter = target.dataset['rightcenter']
    const rightBottom = target.dataset['rightbottom']
    const bottomCenter = target.dataset['bottomcenter']
    const leftCenter = target.dataset['leftcenter']

    if (rightCenter || rightBottom || bottomCenter || leftCenter) {

        const parentNode = target.parentNode as HTMLDivElement
        const pos = parentNode.getBoundingClientRect()

        document.onmousemove = e => {

            const delta = e.x - pos.right
            const deltaBottom = e.y - pos.bottom
            const deltaLeft = pos.left - e.x

            if (rightCenter) {
                parentNode.style.width = pos.width + delta + 'px'
            }
            else if (rightBottom) {
                parentNode.style.height = pos.height + delta + 'px'
                parentNode.style.width = pos.width + delta + 'px'
            }
            else if (leftCenter) {
                parentNode.style.width = pos.width + deltaLeft + 'px'
            }
            else {
                parentNode.style.height = pos.height + deltaBottom + 'px'
            }
        }

        document.onmouseup = e => {
            document.onmousemove = null
            document.onmouseup = null
        }
    }
}


export function checkNodeImageOrNot(target : HTMLElement, pageDiv : HTMLDivElement | null) {

    if (target.closest('.image')) {

        if ( !target.closest('.activeImage') ) {
            pageDiv
                ?.querySelectorAll('.image')
                .forEach(item => item.classList.remove('activeImage'))

            target.classList.add('activeImage')
        }

        return true
    }
    else {
        pageDiv
            ?.querySelectorAll('.image')
            .forEach(item => item.classList.remove('activeImage'))

        return false
    }

}


export function emitterImageMargin(styles : any) {

    const imageMarginLeft = Math.floor( +styles.marginLeft.split('px')[0] )
    const imageMarginRight = Math.floor( +styles.marginRight.split('px')[0] )


    if(imageMarginLeft > imageMarginRight) {
        emitter.emit('IMAGE__SIDE', 'right')
    }
    else if (imageMarginRight > imageMarginLeft) {
        emitter.emit('IMAGE__SIDE', 'left')
    }
    else if (imageMarginRight === imageMarginLeft) {
        emitter.emit('IMAGE__SIDE', 'center')
    }

}
