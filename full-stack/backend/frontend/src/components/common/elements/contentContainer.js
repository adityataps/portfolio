import React, {useEffect, useState} from 'react'
import "./stylesheets/contentContainer.css"
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";

function ContentContainer(props) {

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const isMobile = windowSize <= 800

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <div className={`${isMobile ? "mobile" : ""} content-container`}>
            {/*<OverlayScrollbarsComponent>*/}
                {props.children}
            {/*</OverlayScrollbarsComponent>*/}
        </div>
    )
}

export default ContentContainer