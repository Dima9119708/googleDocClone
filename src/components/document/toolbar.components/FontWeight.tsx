import React from "react";
import {Tooltip} from "antd";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import {CHANGE_TEXT_ACTION, FONT_WEIGHT_ACTION} from "../../../redux/documentRecuder/docAction";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";

const { fontWeight } = defaultPageStyle

export const FontWeight = () => {

    const { styles } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [boldActive, setBold] = React.useState(fontWeight)
    const dispatch = useDispatch()


    React.useEffect(() => {
        dispatch(FONT_WEIGHT_ACTION(boldActive))
    }, [boldActive])


    React.useEffect(() => setBold(styles.fontWeight), [styles.fontWeight])


    const boldHandler = () => {
        dispatch(CHANGE_TEXT_ACTION(true))
        setBold(boldActive === 'normalWeight' ? 'bold' : 'normalWeight')
    }

    return (

        <Tooltip title="Полужирный" placement="top">
            <FormatBoldIcon
                onClick={boldHandler}
                style={{
                    marginRight : '8px',
                    backgroundColor : boldActive === 'bold' ? 'rgb(232, 240, 254)' : '',
                    color : boldActive === 'bold' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }}
            />
        </Tooltip>
    )
}