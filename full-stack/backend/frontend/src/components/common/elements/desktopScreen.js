import React from 'react'
import './stylesheets/desktopScreen.css'

function DesktopScreen(props) {


    return (
        <div className={"desktop-page"}>
            {props.children}
        </div>
    )

}

export default DesktopScreen