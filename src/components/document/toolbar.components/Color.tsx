import React from "react";
import {Popover, Tooltip} from "antd";
import {CompactPicker} from "react-color";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";

export const Color = () => {

    const [activePopupColor, setPopupColor] = React.useState(false)
    const [color, setColor] = React.useState('rgba(0, 0, 0, 0.85)')

    const $color = React.useRef<SVGSVGElement>(null)

    React.useEffect(() => {

        const svgColorText = $color.current!.children[0] as HTMLElement
        svgColorText.style.color = color

    }, [color])

    const handleSetColor = (color : { hex : string }) => {
       setColor(color.hex)
    }

    const handleChangePopupColor = () => {
        setPopupColor(activePopupColor === false ? true : false)
    }

    return (
        <Tooltip title="Цвет текста" placement="top">

            <Popover
                trigger="click"
                visible={activePopupColor}
                onVisibleChange={handleChangePopupColor}
                content={
                    <CompactPicker color="#fff" onChange={handleSetColor}/>
                }
            >
                <FormatColorTextIcon ref={$color} style={{marginRight : '8px'}}/>
            </Popover>

        </Tooltip>
    )
}