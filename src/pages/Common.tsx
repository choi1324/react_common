import Alert from "@/components/alert";
import React from "react";

const COMMON_TITLE = '공통 모듈 페이지'

function COMMON() {
    return (
        <div id="home">
            <strong>{COMMON_TITLE}</strong>
            <Alert 
            alertBorder=""
            alertColor="red"
            icon="https://img.icons8.com/material-rounded/344/selfies.png"
            alertText="test"
            />
        </div>
    )
}

export default COMMON;