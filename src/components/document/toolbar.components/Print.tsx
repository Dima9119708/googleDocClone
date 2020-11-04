import React from "react";
import ReactToPrint from "react-to-print";
import PrintIcon from '@material-ui/icons/Print';
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {Tooltip} from "antd";

export const Print = () => {

    const { linkPrintDom, page } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)
    const [pagePadding, setPrintPage] = React.useState('')

    React.useEffect(() => {

        const printPagePadding = `
              @page {
                 margin-top : ${page.paddingTop}px;
                 margin-right : ${page.paddingRight}px;
                 margin-left : ${page.paddingLeft}px;
                 margin-bottom : ${page.paddingBottom}px;
              }
        `
        setPrintPage(printPagePadding)

    }, [page.paddingBottom, page.paddingTop, page.paddingRight, page.paddingLeft])

    return (<>

        <style
            type="text/css"
            dangerouslySetInnerHTML={{__html : pagePadding}}
        />

        <ReactToPrint
            trigger={() => {
                return <Tooltip title="Печатать" placement="top">
                    <PrintIcon />
                </Tooltip>

            }}
            content={() => linkPrintDom}
        />

    </>)
}