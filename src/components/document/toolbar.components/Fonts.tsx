import React from "react";
import {Select, Tooltip} from "antd";
import {CHANGE_TEXT_ACTION, FONT_FAMILY_ACTION} from "../../../redux/documentRecuder/docAction";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";

const { Option } = Select;

export const Fonts = () => {

    const { styles } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()

    const fonts = ['Roboto', 'Montserrat', 'Noto Sans JP', 'Open Sans', 'Anton']

    const handleChange = (value : string) => {
        dispatch(CHANGE_TEXT_ACTION(true))
        dispatch(FONT_FAMILY_ACTION(value))
    }

    return (
        <Tooltip title="Шрифт" placement="top">
            <Select
                value={styles.fontFamily}
                style={{width : '110px'}}
                dropdownStyle={ { minWidth : '150px'} }
                onChange={handleChange}
            >
                { fonts.map(item => {
                    return <Option
                        key={item}
                        style={{fontFamily : `${item}, sans-serif`}}
                        value={item}
                    >
                        {item}
                    </Option>
                }) }
            </Select>
        </Tooltip>
    )
}