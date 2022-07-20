import React from "react";

const NAVIGATION_TITLE = '네비'

function Navigation() {
    return (
        <div id="navigation">
            <strong>{NAVIGATION_TITLE}</strong>
            <span><a href="/">메인</a></span>
            <span><a href="/common">공통</a></span>
        </div>
    )
}

export default Navigation;