import React from "react";
import {Select} from "antd";

const { Option } = Select;

export const Styles = () => {

    return (
        <Select
            defaultValue="Обычный заголовок"
            style={{width : '120px'}}
            dropdownStyle={ { minWidth : '250px'} }
        >
            <Option style={{fontSize : '15px', height : '55px', padding : '10px', borderBottom : '1px solid #d9d9d9' }} value="Обычный заголовок">Обычный заголовок</Option>
            <Option style={{fontSize : '40px', height : '55px', padding : '10px', borderBottom : '1px solid #d9d9d9' }} value="Название">Название </Option>
            <Option style={{fontSize : '20px', height : '55px', padding : '10px', borderBottom : '1px solid #d9d9d9' }} value="Подзаголовок">Подзаголовок </Option>
            <Option style={{fontSize : '30px', height : '55px', padding : '10px', borderBottom : '1px solid #d9d9d9' }} value="Заголовок 1">Заголовок 1 </Option>
            <Option style={{fontSize : '22px', height : '55px', padding : '10px', borderBottom : '1px solid #d9d9d9' }} value="Заголовок 2">Заголовок 2 </Option>
            <Option style={{fontSize : '16px', height : '55px', padding : '10px', borderBottom : '1px solid #d9d9d9' }} value="Заголовок 3">Заголовок 3 </Option>
        </Select>
    )
}