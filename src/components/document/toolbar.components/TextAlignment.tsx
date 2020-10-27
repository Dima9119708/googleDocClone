import React from "react";
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import {Tooltip} from "antd";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {TEXT_ALIGN_ACTION} from "../../../redux/documentRecuder/docAction";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";


const { textAlign : textAlignDef } = defaultPageStyle

export const TextAlignment = () => {

    const { styles } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [textAlign, setTextAlign] = React.useState(textAlignDef)
    const dispatch = useDispatch()

    React.useEffect(() => setTextAlign(styles.textAlign), [styles.textAlign])

    const changeTextAlign = (pos : string) => {
        setTextAlign(pos)
        //dispatch(CHANGE_TEXT_ACTION(true))
        //dispatch(TEXT_ALIGN_ACTION(pos))

        if (pos === 'center') document.execCommand('justifyCenter')
        else if (pos === 'right') document.execCommand('justifyRight')
        else document.execCommand('justifyLeft')
    }

    return (
        <>
            <Tooltip title="Выравнивание по левому краю" placement="top">
                <FormatAlignLeftIcon
                    onClick={() => changeTextAlign('left')}
                    style={{
                        marginRight : '8px',
                        padding : textAlign === 'left' ? '2px' : '',
                        backgroundColor : textAlign === 'left' ? 'rgb(232, 240, 254)' : '',
                        color : textAlign === 'left' ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                    }}
                />
            </Tooltip>

            <Tooltip title="Выравнивание по центру" placement="top">
                <FormatAlignJustifyIcon
                    onClick={() => changeTextAlign('center')}
                    style={{
                        marginRight : '8px',
                        padding : textAlign === 'center' ? '2px' : '',
                        backgroundColor : textAlign === 'center' ? 'rgb(232, 240, 254)' : '',
                        color : textAlign === 'center' ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                    }}
                />
            </Tooltip>

            <Tooltip title="Выравнивание по правому краю" placement="top">
                <FormatAlignRightIcon
                    onClick={() => changeTextAlign('right')}
                    style={{
                        marginRight : '8px',
                        padding : textAlign === 'right' ? '2px' : '',
                        backgroundColor : textAlign === 'right' ? 'rgb(232, 240, 254)' : '',
                        color : textAlign === 'right' ? 'rgb(26, 115, 232)' : '',
                        borderRadius : '2px'
                    }}
                />
            </Tooltip>

        </>
    )
}