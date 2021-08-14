import React, {useEffect, useState} from 'react'
import Typist from "react-typist";
import "./stylesheets/about.css"
import 'react-typist/dist/Typist.css'
import bgImg from "../../media/barca-city.jpg"
import me from "../../media/me.png"
import ContentContainer from "../../common/elements/contentContainer";
import '../../common/elements/stylesheets/contentContainer.css'
import '../../../../node_modules/animate.css/animate.css'
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";

function About() {

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

    return (


        <OverlayScrollbarsComponent style={{"background-image": `url(${bgImg})`}} className={"page-wrapper"}>
            {/*<PageWrapper>*/}


            {/*<NavBar />*/}
            <ContentContainer>

                <div className={`${isMobile ? "mobile" : ""} about-container`}>
                    <div className={`${isMobile ? "mobile" : ""} picture-me`}>
                        <div className={"img-container"}>
                            <img src={me} alt={""} className={"portrait"}/>
                        </div>
                    </div>

                    <OverlayScrollbarsComponent className={`${isMobile ? "mobile" : ""} about-text`}>


                        <div className={`${isMobile ? "mobile" : ""} about-typist-container`}>
                            <Typist startDelay={800} cursor={{blink: true, element: '|'}}>
                                System.out.println("
                                <b style={{color: 'crimson'}}>
                                    hello world!
                                </b>
                                ");
                            </Typist>
                        </div>

                        <hr/>

                        <div className={"about-text-container"}>
                            <p>
                                <ul className={"emoji"}>
                                    <li>I'm a developer based in Atlanta, GA. I am pursuing my Master's in
                                        Interactive Intelligence at Georgia Tech.<br/><br/></li>
                                    <li>I completed my Bachelor's in Computer Science at Georgia Tech, with concentrations
                                    in Artificial Intelligence and User Experience and a minor in Health and Medical
                                    Sciences.<br/><br/></li>
                                    <li>I love to code in my free time. In the past I've trained an Object Detection model
                                    on road signs with Darknet YOLO, stitched photos into panoramas using Computer Vision,
                                    prototyped front-end wireframes for web and mobile apps, and constructed a chest X-Ray
                                    cardiomegaly and chest neoplasm detector.<br/><br/></li>
                                    <li>When I'm not coding, I enjoy gaming, cooking, listening to music and podcasts,
                                    travelling, mentoring, and admiring fine art and design.<br/><br/></li>
                                    <li>I am a geek at heart and I love to do what I do,
                                    driven by the unpossible and seeking to be inspired by those around me.</li>
                                </ul>
                            </p>
                        </div>

                    </OverlayScrollbarsComponent>

                </div>


            </ContentContainer>
            {/*</PageWrapper>*/}
        </OverlayScrollbarsComponent>
    )
}


export default About