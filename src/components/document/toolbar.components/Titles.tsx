import React from "react";
import {Select, Tooltip} from "antd";
import {setStyles} from "../mainBlock.components/page/page.functions";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";

const { Option } = Select;

export const Titles = () => {

    const { range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)

    const handleChange = (value : string) => {
        setStyles(range, 'fontSize', value)
    }

    return (
        <Tooltip title="Стили" placement="top">
            <Select
                defaultValue="Заголовок 1"
                style={{width : '120px'}}
                dropdownStyle={ { minWidth : '250px'} }
                onChange={handleChange}
            >
                <Option style={{fontSize : '32px', height : '55px', padding : '10px', borderBottom : '1px solid #d9d9d9' }} value="6">Заголовок 1 </Option>
                <Option style={{fontSize : '24px', height : '55px', padding : '10px', borderBottom : '1px solid #d9d9d9' }} value="5">Заголовок 2 </Option>
                <Option style={{fontSize : '16px', height : '55px', padding : '10px', borderBottom : '1px solid #d9d9d9' }} value="4">Заголовок 3 </Option>
            </Select>
        </Tooltip>
    )
}