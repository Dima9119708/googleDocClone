export const formatMonth = (month : string) => {
    return month[0].toLowerCase() + month.slice(1, month.length)
}

export const addMonths : string[] = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек'
]

export const date = new Date().toLocaleDateString()
export const month = new Date().getMonth()
export const parseDate = date.split(".")
export const generateDate = `${parseDate[0]} ${formatMonth(addMonths[month])}. ${parseDate[2]} г.`

export const userID = () => {
    const key = localStorage.getItem('googleReactKey')

    if (!key) {
        const createID = Date.now().toString()
        localStorage.setItem('googleReactKey', createID)
        userID()
    }

    return key
}