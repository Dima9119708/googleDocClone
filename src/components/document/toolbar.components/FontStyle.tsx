import React from "react";
import {Tooltip} from "antd";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {CHANGE_STYLES_ACTION} from "../../../redux/documentRecuder/docAction";
import {setStyles} from "../mainBlock.components/page.functions";


const { fontStyle } = defaultPageStyle

export const FontStyle = () => {

    const { styles, changeStyle, range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [italicActive, setItalic] = React.useState(fontStyle)
    const dispatch = useDispatch()

    React.useEffect(() => {
        setItalic(styles.fontStyle)
        dispatch(CHANGE_STYLES_ACTION( false))
    }, [styles.fontStyle, changeStyle])


    const italicHandler = () => {
        setItalic(italicActive === 'normal' ? 'italic' : 'normal')
        setStyles(range, 'italic')
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