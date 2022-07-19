import React from "react";
import react_ico from '@/assets/images/react_ico.svg';

const HEADER_TITLE = '헤더 타이틀'

function Header() {
    return (
        <div id="header">
            <img src={react_ico} />
            <strong>{HEADER_TITLE}</strong>
        </div>
    )
}

export default Header;