import React from "react";
import {Select, Tooltip} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_TEXT_ACTION, FONT_SIZE_ACTION} from "../../../redux/documentRecuder/docAction";
import {docReducerTYPE} from "../../../redux/store";

const { Option } = Select;

export const FontSize = () => {

    const { styles } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()


    const eventChange = (value : string) => {
        dispatch(CHANGE_TEXT_ACTION(true))
        dispatch(FONT_SIZE_ACTION(value))
    }

    return (
        <Tooltip title="Размер шрифта" placement="top">
            <Select
                onChange={eventChange}
                value={styles.fontSize}
                style={{width : '60px'}}
            >
                <Option value="8">8</Option>
                <Option value="9">9</Option>
                <Option value="10">10</Option>
                <Option value="11">11</Option>
                <Option value="12">12</Option>
                <Option value="14">14</Option>
                <Option value="18">18</Option>
                <Option value="24">24</Option>
                <Option value="30">30</Option>
                <Option value="36">36</Option>
                <Option value="48">48</Option>
                <Option value="60">60</Option>
                <Option value="72">72</Option>
                <Option value="96">96</Option>
            </Select>
        </Tooltip>
    )
}