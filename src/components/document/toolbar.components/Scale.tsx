import React from "react";
import {Select, Tooltip} from "antd";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";

const { Option } = Select;

export const Scale = () => {

    const { page, divPage, headerSlideDom } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)

    const handleChange = (value : string) => {

        const $page = divPage! as HTMLDivElement
        const $divWrite = $page.children[0] as HTMLDivElement
        const $headerSlide = headerSlideDom! as HTMLDivElement

        const result = +value * page.width / 100

        const start = value.substr(0, 1)

        $page.style.width = result + 'px'
        $headerSlide.style.width = result + 'px'

        $divWrite.style.transform = `scale(${start}.${value.slice(1, value.length)})`
    }

    return (
        <Tooltip title="Масштаб" placement="top">
            <Select
                defaultValue="100%"
                style={{width : '80px'}}
                onChange={handleChange}
            >
                <Option value="50">50%</Option>
                <Option value="75">75%</Option>
                <Option value="100">100%</Option>
                <Option value="125">125%</Option>
                <Option value="150">150%</Option>
            </Select>
        </Tooltip>
    )
}