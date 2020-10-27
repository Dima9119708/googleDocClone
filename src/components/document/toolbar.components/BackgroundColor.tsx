import React from "react";
import {Popover, Tooltip} from "antd";
import {CompactPicker} from "react-color";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import {useDispatch, useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {setStyles} from "../mainBlock.components/page.functions";


const { bg } = defaultPageStyle

export const BackgroundColor = () => {

    const [activePopupBackgroundColor, setPopupBackgroundColor] = React.useState(false)
    const [getBackgroundColor, setBackgroundColor] = React.useState(bg)
    const { styles, range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const $backgroundColor = React.useRef<SVGSVGElement>(null)

    React.useEffect(() => {

        const svgBackgroundColor = $backgroundColor.current!.children[1] as HTMLElement
        svgBackgroundColor.style.color = getBackgroundColor
        svgBackgroundColor.style.fillOpacity = '1'

    }, [getBackgroundColor])


    React.useEffect(() => setBackgroundColor(styles.bg), [styles.bg])


    const handleSetBackgroundColor = (color : {hex : string}) => {
        setBackgroundColor(color.hex)
        setStyles(range, 'backColor', color.hex)
    }


    const handleChangePopupBackgroundColor = () => {
        setPopupBackgroundColor(activePopupBackgroundColor === false ? true : false)
    }

    return (
        <Tooltip title="Цвет текста фон" placement="top">

            <Popover
                trigger="click"
                visible={activePopupBackgroundColor}
                onVisibleChange={handleChangePopupBackgroundColor}
                content={
                    <CompactPicker color="#fff" onChange={handleSetBackgroundColor}/>
                }
            >
                <FormatColorFillIcon ref={$backgroundColor} style={{marginRight : '8px'}} />
            </Popover>

        </Tooltip>
    )
}