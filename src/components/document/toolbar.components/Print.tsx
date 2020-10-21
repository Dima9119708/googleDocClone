import React from "react";
import ReactToPrint from "react-to-print";
import PrintIcon from '@material-ui/icons/Print';
import {useSelector} from "react-redux";
import {docReducerTYPE} from "../../../redux/store";
import {Tooltip} from "antd";

export const Print = () => {

    const { linkPrintDom } = useSelector(({ docReducer } : docReducerTYPE ) => docReducer)

    return (
        <ReactToPrint
            trigger={() => {
                return <Tooltip title="Печатать" placement="top">
                    <PrintIcon />
                </Tooltip>

            }}
            content={() => linkPrintDom}
        />
    )
}