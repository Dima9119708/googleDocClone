import React from "react";
import {Select, Tooltip} from "antd";

const { Option } = Select;

export const Fonts = () => {

    return (
        <Tooltip title="Шрифт" placement="top">
            <Select
                defaultValue="Roboto"
                style={{width : '110px'}}
                dropdownStyle={ { minWidth : '150px'} }
            >
                <Option style={{fontFamily : '\'Roboto\', sans-serif'}} value="Roboto">Roboto</Option>
                <Option style={{fontFamily : '\'Montserrat\', sans-serif'}} value="Montserrat">Montserrat</Option>
                <Option style={{fontFamily : '\'Noto Sans JP\', sans-serif'}} value="Noto Sans JP">Noto Sans JP</Option>
                <Option style={{fontFamily : '\'Open Sans\', sans-serif'}} value="Open Sans">Open Sans</Option>
                <Option style={{fontFamily : '\'Anton\', sans-serif'}} value="Anton">Anton</Option>
            </Select>
        </Tooltip>
    )
}