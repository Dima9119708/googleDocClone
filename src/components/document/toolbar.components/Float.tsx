import React from "react";
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import {Tooltip} from "antd";
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import BackspaceIcon from '@material-ui/icons/Backspace';
import {emitter} from "../../../Emitter/emitter";

export const Float = () => {

    const { divPage } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [float, setFloat] = React.useState('')

    React.useEffect(() => {
        emitter.on('FLOAT', currentFloat => setFloat(currentFloat))
    }, [])

    const changeFloat = (value : string) => {

        setFloat(value)

        const $page = divPage! as HTMLDivElement
        const div = $page.children[0]
        const activeImage = div.querySelector('.activeImage') as HTMLDivElement

        if ( value === 'left' ) {
            activeImage.style.marginRight = '8px'
            activeImage.style.marginLeft = '0'
            activeImage.style.float = 'left'
            emitter.emit('IMAGE__SIDE', 'left')
        }
        else if ( value === 'right' ){
            activeImage.style.marginLeft = '8px'
            activeImage.style.marginRight = '0'
            activeImage.style.float = 'right'
            emitter.emit('IMAGE__SIDE', 'right')
        }
        else {
            activeImage.style.float = 'none'
            activeImage.style.marginRight = 'auto'
            activeImage.style.marginLeft = '0'
            emitter.emit('IMAGE__SIDE', 'left')
        }
    }

    return (<>
        <Tooltip title="Обтекание по правому краю" placement="top">
            <ArtTrackIcon
                onClick={() => changeFloat('left')}
                style={{
                    marginRight: '14px',
                    transform: 'scale(1.2)',
                    backgroundColor : float === 'left' ? 'rgb(232, 240, 254)' : '',
                    color : float === 'left' ? 'rgb(26, 115, 232)' : '',
            }} />
        </Tooltip>

        <Tooltip title="Обтекание по левому краю" placement="top">
            <ArtTrackIcon
                onClick={() => changeFloat('right')}
                style={{
                    marginRight: '8px',
                    transform: 'scale(1.2) rotate(-180deg)',
                    backgroundColor : float === 'right' ? 'rgb(232, 240, 254)' : '',
                    color : float === 'right' ? 'rgb(26, 115, 232)' : '',
            }} />
        </Tooltip>

        <Tooltip title="Удалить обтекание" placement="top">
            <BackspaceIcon
                style={{transform: 'scale(0.8)'}}
                onClick={() => changeFloat('none')}
            />
        </Tooltip>
    </>)
}
