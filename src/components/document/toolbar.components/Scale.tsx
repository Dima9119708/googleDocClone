import React from "react";
import {Select, Tooltip} from "antd";

const { Option } = Select;

export const Scale = () => {


    return (
        <Tooltip title="Масштаб" placement="top">
            <Select
                defaultValue="100%"
                style={{width : '80px'}}
            >
                <Option value="50%">50%</Option>
                <Option value="75%">75%</Option>
                <Option value="100%">100%</Option>
                <Option value="125%">125%</Option>
                <Option value="150%">150%</Option>
                <Option value="200%">200%</Option>
            </Select>
        </Tooltip>
    )
}