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

        document.execCommand(comand, false, value)
    }
}
