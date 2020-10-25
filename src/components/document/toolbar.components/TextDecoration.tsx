import React from "react";
import {Tooltip} from "antd";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_TEXT_ACTION, TEXT_DECORATION_ACTION} from "../../../redux/documentRecuder/docAction";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {docReducerTYPE} from "../../../redux/store";


const { textDecoration } = defaultPageStyle

export const TextDecoration = () => {

    const [underlinedActive, setUnderlined] = React.useState(textDecoration)
    const dispatch = useDispatch()
    const { styles } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)


    React.useEffect(() => {
        dispatch(TEXT_DECORATION_ACTION(underlinedActive))
    }, [underlinedActive])


    React.useEffect(() => setUnderlined(styles.textDecoration), [styles.textDecoration])


    const underlinedHandler = () => {
        dispatch(CHANGE_TEXT_ACTION(true))
        setUnderlined(underlinedActive === 'underline' ? 'noneUnderline' : 'underline')
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