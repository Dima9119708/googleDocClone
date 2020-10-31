import {$stylesElem} from "./Page";

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

            $stylesElem.push({comand, value})
            $stylesElem.forEach(item => {
                document.execCommand(item.comand, false, item.value)
            })

        }

    }
}
