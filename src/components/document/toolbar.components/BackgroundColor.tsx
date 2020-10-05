import React from "react";
import {Popover, Tooltip} from "antd";
import {CompactPicker} from "react-color";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";

export const BackgroundColor = () => {

    const [activePopupBackgroundColor, setPopupBackgroundColor] = React.useState(false)
    const [getBackgroundColor, setBackgroundColor] = React.useState('rgba(0, 0, 0, 0.85)')

    const $backgroundColor = React.useRef<SVGSVGElement>(null)

    React.useEffect(() => {

        const svgBackgroundColor = $backgroundColor.current!.children[1] as HTMLElement
        svgBackgroundColor.style.color = getBackgroundColor

    }, [getBackgroundColor])

    const handleSetBackgroundColor = (color : {hex : string}) => {
        setBackgroundColor(color.hex)
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