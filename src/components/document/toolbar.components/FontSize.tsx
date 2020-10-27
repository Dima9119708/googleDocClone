import React from "react";
import {Select, Tooltip} from "antd";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {setStyles} from "../mainBlock.components/page.functions";

const { Option } = Select;

export const FontSize = () => {

    const { styles, range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)

    const eventChange = (value : string) => {
        setStyles(range, 'fontSize', value)
    }

    return (
        <Tooltip title="Размер шрифта" placement="top">
            <Select
                onChange={eventChange}
                value={styles.fontSize}
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