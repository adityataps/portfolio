import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './stylesheets/projects.css'
import NavBar from "../../common/elements/navbar";
import styled from "styled-components";
import bgImg from "../../media/switz.jpg";
import Typist from "react-typist";
import 'react-typist/dist/Typist.css'
import ContentContainer from "../../common/elements/contentContainer";
import ProjectContainer from "./components/projectContainer";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";

function Projects(props) {

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const isMobile = windowSize <= 800

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    const imgs = [bgImg];
    useEffect(() => {

        imgs.forEach((bgImg) => {
            new Image().src = bgImg.fileName;
        })

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return(
        <OverlayScrollbarsComponent style={{"background-image": `url(${bgImg})`}} className={"page-wrapper"}>
            {/*<NavBar />*/}
            <ContentContainer>
                <div className={`${isMobile? "mobile" : ""} project-contents`}>
                    <div className={`${isMobile? "mobile" : ""} typist-container`}>
                        <Typist startDelay={800} cursor={{blink: true, element: '|'}}>
                            &lt;b&gt;&nbsp;
                            <b style={{color: 'crimson', margin: ""}}>
                                past works
                            </b>
                            &nbsp;&lt;/b&gt;
                        </Typist>
                    </div>
                    <hr style={{width: "90%", "margin": "5px auto 15px"}}/>
                    <ProjectContainer projects={props} />
                </div>
            </ContentContainer>
        </OverlayScrollbarsComponent>
    )
}


export default Projects