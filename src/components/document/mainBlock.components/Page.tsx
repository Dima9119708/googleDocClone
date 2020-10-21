import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {LINK_PRINT_DOM_ACTION} from "../../../redux/documentRecuder/docAction";
import {docReducerTYPE} from "../../../redux/store";

const heightPage = 1200
export const widthPage = 800

export const Page = () => {

    const { page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const $divContent = React.useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    const handleInput = (e : React.FormEvent<HTMLDivElement>) => {}

    React.useEffect(() => {

        const div = $divContent.current!.children[0] as HTMLDivElement
        div.focus()

        dispatch(LINK_PRINT_DOM_ACTION($divContent.current!))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [$divContent])

    return (
            <div
                ref={$divContent}
                style={{
                    minHeight : heightPage,
                    width : '100%',
                    maxWidth : widthPage,
                    margin : '0 auto',
                    paddingTop : page.paddingTop,
                    paddingBottom : page.paddingBottom,
                    paddingRight : page.paddingRight,
                    paddingLeft : page.paddingLeft,
                    backgroundColor : '#ffffff',
                    boxShadow: 'rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                }}
            >
                    <div
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        onInput={handleInput}
                    >
                    </div>
            </div>
    )
}