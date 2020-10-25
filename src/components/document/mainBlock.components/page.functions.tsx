export function formatFontFamily(fontFamily : string) {
    return fontFamily.split(' ').join('')
}

export function formatGetFontFamily(fontFamily : string) {

    const getFont = fontFamily.split(',')[0]

    return getFont.startsWith('"')
             ? getFont.substr(1, getFont.length - 2)
             : getFont
}