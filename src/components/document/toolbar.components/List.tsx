import React from "react";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import {setStyles} from "../mainBlock.components/page/page.functions";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {emitter} from "../../../core/emitter";
import {Tooltip} from "antd";

export const List = () => {

    const [list, setList] = React.useState('')
    const [listNum, setListNum] = React.useState('')
    const { range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)


    React.useEffect(() => {

        emitter.on('LIST', listName => {
            if (listName === 'ul') {
                setList(listName)
            }
            else if (listName === 'ol') {
                setListNum(listName)
            }
            else {
                setList('')
                setListNum('')
            }
        })

    }, [])


    const handleChange = (value : string) => {

        if(value === 'ul') {
            setStyles(range, 'insertUnorderedList')

            setList(list === 'ul' ? '' : 'ul')
            setListNum('')
        }
        else {
            setStyles(range, 'insertOrderedList')

            setListNum(listNum === 'ol' ? '' : 'ol')
            setList('')
        }
    }

    return (<>

        <Tooltip title="Маркированный список" placement="top">
            <FormatListBulletedIcon
                onClick={e => handleChange('ul')}
                style={{
                    marginRight : '8px',
                    backgroundColor : list === 'ul' ? 'rgb(232, 240, 254)' : '',
                    color : list === 'ul' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }}
            />
        </Tooltip>

        <Tooltip title="Нумерованный список" placement="top">
            <FormatListNumberedIcon
                onClick={ e => handleChange('ol')}
                style={{
                    marginRight : '8px',
                    backgroundColor : listNum === 'ol' ? 'rgb(232, 240, 254)' : '',
                    color : listNum === 'ol' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }}
            />
        </Tooltip>
    </>)
}