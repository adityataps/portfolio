import React from 'react'
import "./stylesheets/contentContainer.css"

function ContentContainer(props) {
    return (
        <div className={"content-container"}>
            {props.children}
        </div>
    )
}

export default ContentContainer