import React from "react";
import {Tooltip} from "antd";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import {CHANGE_STYLES_ACTION} from "../../../redux/documentRecuder/docAction";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {setStyles} from "../mainBlock.components/page.functions";

const { fontWeight } = defaultPageStyle

export const FontWeight = () => {

    const { styles, changeStyle, range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [boldActive, setBold] = React.useState(fontWeight)
    const dispatch = useDispatch()

    React.useEffect(() => {
        setBold(styles.fontWeight)
        dispatch(CHANGE_STYLES_ACTION( false))
    }, [styles.fontWeight, changeStyle])


    const boldHandler = () => {
        setBold(boldActive === '400' ? '700' : '400')
        setStyles(range, 'bold')
    }

    return (

        <Tooltip title="Полужирный" placement="top">
            <FormatBoldIcon
                onClick={boldHandler}
                style={{
                    marginRight : '8px',
                    backgroundColor : boldActive === '700' ? 'rgb(232, 240, 254)' : '',
                    color : boldActive === '700' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }}
            />
        </Tooltip>
    )
}