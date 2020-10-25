import React from "react";
import {Tooltip} from "antd";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {CHANGE_TEXT_ACTION, FONT_STYLE_ACTION, FONT_WEIGHT_ACTION} from "../../../redux/documentRecuder/docAction";


const { fontStyle } = defaultPageStyle

export const FontStyle = () => {

    const { styles } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [italicActive, setItalic] = React.useState(fontStyle)
    const dispatch = useDispatch()


    React.useEffect(() => {
        dispatch(FONT_STYLE_ACTION(italicActive))
    }, [italicActive])


    React.useEffect(() => setItalic(styles.fontStyle), [styles.fontStyle])


    const italicHandler = () => {
        dispatch(CHANGE_TEXT_ACTION(true))
        setItalic(italicActive === 'normalItalic' ? 'italic' : 'normalItalic')
    }

    return (
        <Tooltip title="Курсивный" placement="top">
            <FormatItalicIcon
                onClick={italicHandler}
                style={{
                    marginRight : '8px',
                    backgroundColor : italicActive === 'italic' ? 'rgb(232, 240, 254)' : '',
                    color : italicActive === 'italic' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }} />
        </Tooltip>
    )
}