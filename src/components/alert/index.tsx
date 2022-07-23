import React from "react";

const Alert = ({
    alertBorder,
    alertColor,
    icon,
    alertText,
}: {
    alertBorder: string,
    alertColor: string,
    icon: string,
    alertText: string
}) => {

    return (
        <div className="alert" style={{
            backgroundColor: alertColor
            }}>
            <img src={icon}/>
            <span>{alertText}</span>
        </div>
    )
}

export default Alert;