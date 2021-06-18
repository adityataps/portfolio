import React, {useEffect, useState} from 'react'
import './stylesheets/resume.css'
import ResumePDF from "./components/resumePDF";
import NavBar from "../../common/elements/navbar";
import styled from "styled-components";
import bgImg from "../../media/arc.jpg";
import ContentContainer from "../../common/elements/contentContainer";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import Typist from "react-typist";
import UseAnimations from "react-useanimations";
import download from 'react-useanimations/lib/download'
import ResumeFile from './components/Resume.pdf'



function Resume() {

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

                <div className={`${isMobile? "mobile" : ""} resume-contents-container`}>

                    <div style={{"display": "flex"}}>
                        <div className={`${isMobile? "mobile" : ""} resume-typist-container`}>
                            <Typist className={`resume-typist-contents`} startDelay={800} cursor={{blink: true, element: '|'}}>
                                Console.log("
                                <b style={{color: 'crimson'}}>
                                    my resume
                                </b>
                                ");
                            </Typist>
                        </div>


                        {/*<a href={"/Resume.pdf"} target={"_blank"} className={"download-button"}>*/}
                        {/*    <UseAnimations animation={download} size={40} />*/}
                        {/*</a>*/}

                    </div>

                    <hr style={{width: "90%", "margin": "5px auto 15px"}}/>




                    {/*<ResumePDF style={{height: "80%"}}/>*/}
                    <iframe id={"pdf"} allowFullScreen src={ResumeFile} className={`${isMobile ? "mobile" : ""} resume-iframe`} />

                </div>


            </ContentContainer>
        </OverlayScrollbarsComponent>
    )
}

export default Resume