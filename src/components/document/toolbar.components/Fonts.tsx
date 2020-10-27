import React from "react";
import {Select, Tooltip} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {setStyles} from "../mainBlock.components/page.functions";

const { Option } = Select;

export const Fonts = () => {

    const { styles, range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const dispatch = useDispatch()

    const fonts = ['Roboto', 'Montserrat', 'Noto Sans JP', 'Open Sans', 'Anton']

    const handleChange = (value : string) => {
        setStyles(range, 'fontName', value)
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