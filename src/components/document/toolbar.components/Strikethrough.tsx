import React from "react";
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {emitter} from "../../../Emitter/emitter";
import {setStyles} from "../mainBlock.components/page/page.functions";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import {$stylesElem} from "../mainBlock.components/page/Page";
import {Tooltip} from "antd";


const { lineThrough } = defaultPageStyle

export const Strikethrough = () => {

    const [strikethrough, setStrikethrough] = React.useState(lineThrough)
    const { range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)


    React.useEffect(() => {
        emitter.on('STRIKETHROUGH', strikethrough => setStrikethrough(strikethrough))
    }, [])


    const handleChange = () => {
        setStrikethrough(strikethrough === 'line-through' ? 'none' : 'line-through')
        setStyles(range, 'strikeThrough')
    }

    return (
        <Tooltip title="Зачеркнутый" placement="top">

            <StrikethroughSIcon
                onClick={handleChange}
                style={{
                    marginRight : '8px',
                    backgroundColor : strikethrough === 'line-through' ? 'rgb(232, 240, 254)' : '',
                    color : strikethrough === 'line-through' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }}
            />

        </Tooltip>
    )
}