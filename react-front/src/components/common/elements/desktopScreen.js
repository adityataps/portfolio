import React from 'react'
import './stylesheets/desktopScreen.css'

function DesktopScreen(props) {

    const bgr = props.bgr

    return (
        <div className={"desktop-page"}>
            {props.children}
        </div>
    )

}

export default DesktopScreen