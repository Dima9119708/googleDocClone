import React from "react";
import {Tooltip} from "antd";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {emitter} from "../../../core/emitter";

export const ImageAlign = () => {

    const { divPage } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [align, setAlign] = React.useState('left')

    React.useEffect(() => {
        emitter.on('IMAGE__SIDE', side => setAlign(side))
    }, [])

    const changeAlign = (side : string) => {

        setAlign(side)

        const $page = divPage! as HTMLDivElement
        const div = $page.children[0]
        const activeImage = div.querySelector('.activeImage') as HTMLDivElement

        activeImage.style.float = 'none'
        emitter.emit('FLOAT', 'none')

        if ( side === 'left' ) {
            activeImage.style.marginRight = 'auto'
            activeImage.style.marginLeft = '0'
        }
        else if ( side === 'center' ) {
            activeImage.style.marginRight = 'auto'
            activeImage.style.marginLeft = 'auto'
        }
        else if ( side === 'right' ){
            activeImage.style.marginRight = '0'
            activeImage.style.marginLeft = 'auto'
        }
    }

    return (<>
        <Tooltip title="Выравнивание по левому краю" placement="top">
            <FormatAlignLeftIcon
                onClick={() => changeAlign('left')}
                style={{
                    marginRight : '8px',
                    padding : align === 'left' ? '2px' : '',
                    backgroundColor : align === 'left' ? 'rgb(232, 240, 254)' : '',
                    color : align === 'left' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }}
            />
        </Tooltip>

        <Tooltip title="Выравнивание по центру" placement="top">
            <FormatAlignJustifyIcon
                onClick={() => changeAlign('center')}
                style={{
                    marginRight : '8px',
                    padding : align === 'center' ? '2px' : '',
                    backgroundColor : align === 'center' ? 'rgb(232, 240, 254)' : '',
                    color : align === 'center' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }}
            />
        </Tooltip>

        <Tooltip title="Выравнивание по правому краю" placement="top">
            <FormatAlignRightIcon
                onClick={() => changeAlign('right')}
                style={{
                    marginRight : '8px',
                    padding : align === 'right' ? '2px' : '',
                    backgroundColor : align === 'right' ? 'rgb(232, 240, 254)' : '',
                    color : align === 'right' ? 'rgb(26, 115, 232)' : '',
                    borderRadius : '2px'
                }}
            />
        </Tooltip>
    </>)
}