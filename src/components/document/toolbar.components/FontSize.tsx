import React from "react";
import {Select, Tooltip} from "antd";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {setStyles} from "../mainBlock.components/page/page.functions";
import {emitter} from "../../../Emitter/emitter";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";

const { Option } = Select;

const { fontSize } = defaultPageStyle

export const FontSize = () => {

    const [activeFont, setFont] = React.useState(fontSize)
    const { range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)

    React.useEffect(() => {
        emitter.on('FONT_SIZE', FONT_SIZE => setFont(FONT_SIZE))
    }, [])

    const eventChange = (value : string) => {
        setFont(value)
        setStyles(range, 'fontSize', value)
    }

    return (
        <Tooltip title="Размер шрифта" placement="top">
            <Select
                onChange={eventChange}
                value={activeFont}
                style={{width : '60px'}}
            >
                <Option value="1">10</Option>
                <Option value="2">13</Option>
                <Option value="3">16</Option>
                <Option value="4">18</Option>
                <Option value="5">24</Option>
                <Option value="6">32</Option>
                <Option value="7">48</Option>
            </Select>
        </Tooltip>
    )
}