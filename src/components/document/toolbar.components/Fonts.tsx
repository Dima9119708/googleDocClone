import React from "react";
import {Select, Tooltip} from "antd";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {setStyles} from "../mainBlock.components/page/page.functions";
import {emitter} from "../../../Emitter/emitter";

const { Option } = Select;

export const Fonts = () => {

    const [activeFont, setFont] = React.useState('Roboto')
    const { range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)

    const fonts = ['Roboto', 'Montserrat', 'Noto Sans JP', 'Open Sans', 'Anton']

    React.useEffect(() => {
        emitter.on('FONT_FAMILY', FONT_FAMILY => setFont(FONT_FAMILY))
    }, [])

    const handleChange = (value : string) => {
        setFont(value)
        setStyles(range, 'fontName', value)
    }

    return (
        <Tooltip title="Шрифт" placement="top">
            <Select
                value={activeFont}
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