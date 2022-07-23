import Alert from "@/components/alert";
import React from "react";

function Popup() {
    return (
        <div id="popup">
            <div id="popupAlert">
                <Alert 
                    alertBorder=""
                    alertColor="red"
                    icon="https://img.icons8.com/material-rounded/344/selfies.png"
                    alertText="I'm an Alert Usage Example"
                />
            </div>
        </div>
    )
}

export default Popup;