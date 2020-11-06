import React from "react";
import {Tooltip} from "antd";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import {useSelector} from "react-redux";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {docReducerTYPE} from "../../../redux/store";
import {setStyles} from "../mainBlock.components/page/page.functions";
import {emitter} from "../../../Emitter/emitter";


const { underline } = defaultPageStyle

export const Underline = () => {

    const [underlined, setUnderlined] = React.useState(underline)
    const { range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)


    React.useEffect(() => {
        emitter.on('UNDERLINE', TEXT_DECORATION => setUnderlined(TEXT_DECORATION))
    }, [])


    const underlinedHandler = () => {
        setUnderlined(underlined === 'underline' ? 'none' : 'underline')
        setStyles(range, 'underline')
    }

    return (
        <Tooltip title="Подчеркнутый" placement="top">
            <FormatUnderlinedIcon
                onClick={underlinedHandler}
                style={{
                    marginRight : '8px',
                    backgroundColor : underlined === 'underline' ? 'rgb(232, 240, 254)' : '',
                    color : underlined === 'underline' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }}
            />
        </Tooltip>
    )
}