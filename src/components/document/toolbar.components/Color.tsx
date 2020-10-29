import React from "react";
import {Popover, Tooltip} from "antd";
import {CompactPicker} from "react-color";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import {useSelector} from "react-redux";
import {defaultPageStyle} from "../../../redux/documentRecuder/docReducer";
import {docReducerTYPE} from "../../../redux/store";
import {setStyles} from "../mainBlock.components/page/page.functions";
import {emitter} from "../../../Emitter/emitter";


const { color : colorDef } = defaultPageStyle

export const Color = () => {

    const [activePopupColor, setPopupColor] = React.useState(false)
    const [color, setColor] = React.useState(colorDef)
    const $color = React.useRef<SVGSVGElement>(null)
    const { styles, range } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)

    React.useEffect(() => {

        const svgColorText = $color.current!.children[0] as HTMLElement
        svgColorText.style.color = color
        svgColorText.style.fillOpacity = '1'

    }, [color])

    React.useEffect(() => {
        emitter.on('COLOR', COLOR => setColor(COLOR))
    }, [])

    const handleSetColor = (color : { hex : string }) => {
       setColor(color.hex)
       setStyles(range, 'foreColor', color.hex)
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