import React from "react";
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import {Tooltip} from "antd";
import {setStyles} from "../mainBlock.components/page/page.functions";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";


export const Indents = () => {

    const { range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)

    const handleChange = (value : string) => {
        if( value === '+' ) {
            setStyles(range, 'indent')
        }
        else {
            setStyles(range, 'outdent')
        }
    }

    return (<>
        <Tooltip title="Уменьшить отступ" placement="top">
            <FormatIndentDecreaseIcon
                onClick={e => handleChange('-')}
                style={{marginRight : '8px'}}
            />
        </Tooltip>

        <Tooltip title="Увеличить отступ" placement="top">
            <FormatIndentIncreaseIcon
                onClick={e => handleChange('+')}
            />
        </Tooltip>
    </>)
}