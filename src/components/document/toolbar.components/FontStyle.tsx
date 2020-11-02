import React from "react";
import {Tooltip} from "antd";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {setStyles} from "../mainBlock.components/page/page.functions";
import {emitter} from "../../../Emitter/emitter";


const { fontStyle } = defaultPageStyle

export const FontStyle = () => {

    const { range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [italicActive, setItalic] = React.useState(fontStyle)

    React.useEffect(() => {
        emitter.on('FONT_STYLE', FONT_STYLE => setItalic(FONT_STYLE))
    }, [])


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