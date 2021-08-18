import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import "./stylesheets/contact.css"
import bgImg from "../../media/barca-beach.jpg"
import NavBar from "../../common/elements/navbar";
import ContentContainer from "../../common/elements/contentContainer";
import ContactForm from "./components/contactForm";
import Typist from "react-typist";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import {Helmet} from "react-helmet";

function Contact() {
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
                <title>Contact - Aditya Tapshalkar</title>
                <meta name="description" content="Let's get in touch" />

                <meta itemprop="name" content="Contact - Aditya Tapshalkar" />
                <meta itemprop="description" content="Let's get in touch" />
                <meta itemprop="image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />

                <meta property="og:url" content="https://tapshalkar.xyz/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact - Aditya Tapshalkar" />
                <meta property="og:description" content="Let's get in touch" />
                <meta property="og:image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact - Aditya Tapshalkar" />
                <meta name="twitter:description" content="Let's get in touch" />
                <meta name="twitter:image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />
            </Helmet>

            <OverlayScrollbarsComponent style={{"background-image": `url(${bgImg})`}} className={"page-wrapper"}>
                {/*<NavBar />*/}
                <ContentContainer>

                    <div className={`${isMobile ? "mobile" : ""} contact-content`} style={{padding: "10px"}}>
                        <div className={`${isMobile ? "mobile" : ""} left-content`}>

                            <div className={`${isMobile ? "mobile" : ""} contact-typist-container`}>
                                <Typist startDelay={800} cursor={{blink: true, element: '|'}}>
                                    print("
                                    <b style={{color: 'crimson'}}>
                                        keep in touch.
                                    </b>
                                    ")
                                </Typist>
                            </div>

                            <hr style={{width: "75%", "margin": "0 auto 20px"}}/>

                            <div className={`${isMobile ? "mobile" : ""} contact-header`}>
                                Got a project in mind? Let's work together.
                            </div>

                            <div className={`${isMobile ? "mobile" : ""} contact-body`}>

                                I'm a meticulous quick learner and go-getter team player,
                                and I'm open to collaboration.

                            </div>


                        </div>

                        <OverlayScrollbarsComponent className={`${isMobile ? "mobile" : ""} right-content`}>
                            <ContactForm />
                        </OverlayScrollbarsComponent>
                    </div>

                </ContentContainer>
            </OverlayScrollbarsComponent>
        </main>
    )
}

export default Contact