import React from "react";
import {Tooltip} from "antd";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import {useDispatch, useSelector} from "react-redux";
import {
    CHANGE_STYLES_ACTION,
    TEXT_DECORATION_ACTION
} from "../../../redux/documentRecuder/docAction";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {docReducerTYPE} from "../../../redux/store";
import {setStyles} from "../mainBlock.components/page.functions";


const { textDecoration } = defaultPageStyle

export const TextDecoration = () => {

    const [underlinedActive, setUnderlined] = React.useState(textDecoration)
    const { styles, changeStyle, range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()

    React.useEffect(() => {
        setUnderlined(styles.textDecoration)
        dispatch(CHANGE_STYLES_ACTION( false))
    }, [styles.textDecoration, changeStyle])

    const underlinedHandler = () => {
        setUnderlined(underlinedActive === 'underline' ? 'none' : 'underline')
        setStyles(range, 'underline')
    }

    return (
        <Tooltip title="Подчеркнутый" placement="top">
            <FormatUnderlinedIcon
                onClick={underlinedHandler}
                style={{
                    marginRight : '8px',
                    backgroundColor : underlinedActive === 'underline' ? 'rgb(232, 240, 254)' : '',
                    color : underlinedActive === 'underline' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }}
            />
        </Tooltip>
    )
}