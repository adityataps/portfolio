import React, {useEffect, useState} from 'react'
import './stylesheets/resume.css'
import {NavLink} from "react-router-dom";
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
import {Helmet} from "react-helmet";



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

        <main>
            <Helmet>
                <title>Résumé - Aditya Tapshalkar</title>
                <meta name="description" content="My curriculum vitae" />

                <meta itemprop="name" content="Résumé - Aditya Tapshalkar" />
                <meta itemprop="description" content="My curriculum vitae" />
                <meta itemprop="image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />

                <meta property="og:url" content="https://tapshalkar.xyz/resume" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Résumé - Aditya Tapshalkar" />
                <meta property="og:description" content="My curriculum vitae" />
                <meta property="og:image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Résumé - Aditya Tapshalkar" />
                <meta name="twitter:description" content="My curriculum vitae" />
                <meta name="twitter:image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />
            </Helmet>

            <OverlayScrollbarsComponent style={{"background-image": `url(${bgImg})`}} className={"page-wrapper"}>
                {/*<NavBar />*/}
                <ContentContainer>

                    <div className={`${isMobile? "mobile" : ""} resume-contents-container`}>

                        <div style={{"display": "flex"}}>
                            <div className={`${isMobile? "mobile" : ""} resume-typist-container`}>
                                <Typist className={`resume-typist-contents`} startDelay={800} cursor={{blink: true, element: '|'}}>
                                    Console.log("
                                    <b style={{color: 'crimson'}}>
                                        my résumé
                                    </b>
                                    ");
                                </Typist>
                            </div>


                            {/*<a href={"/Resume.pdf"} target={"_blank"} className={"download-button"}>*/}
                            {/*    <UseAnimations animation={download} size={40} />*/}
                            {/*</a>*/}

                        </div>
                        <hr style={{width: "90%", "margin": "5px auto 15px"}}/>
                        {isMobile ? <NavLink to={ResumeFile} target={"_blank"} className={"download-link"}>
                                Download
                            </NavLink>
                            : <iframe id={"pdf"} allowFullScreen src={ResumeFile} className={`${isMobile ? "mobile" : ""} resume-iframe`} />}
                        {/*<iframe id={"pdf"} allowFullScreen src={ResumeFile} className={`${isMobile ? "mobile" : ""} resume-iframe`} />*/}

                    </div>
                </ContentContainer>
            </OverlayScrollbarsComponent>

        </main>


    )
}

export default Resume