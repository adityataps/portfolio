import React, { useEffect } from 'react'
import "./stylesheets/blog.css"
import NavBar from "../../common/elements/navbar";
import styled from "styled-components";
import { useParams, useLocation, Redirect } from 'react-router-dom';
import bgImg from "../../media/gothic-q.jpg";
import BlogpostContainer from "./components/blogpostContainer";
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import {Helmet} from "react-helmet";

function Blog(props) {

    const imgs = [bgImg];
    useEffect(() => {
        imgs.forEach((bgImg) => {
            new Image().src = bgImg.fileName;
        })
    }, [])

    return(

        <main>
            <Helmet>
                <title>Blog - Aditya Tapshalkar</title>
                <meta name="description" content="About me" />

                <meta itemprop="name" content="Blog - Aditya Tapshalkar" />
                <meta itemprop="description" content="My musings" />
                <meta itemprop="image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />

                <meta property="og:url" content="https://tapshalkar.xyz/blog" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog - Aditya Tapshalkar" />
                <meta property="og:description" content="My musings" />
                <meta property="og:image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog - Aditya Tapshalkar" />
                <meta name="twitter:description" content="My musings" />
                <meta name="twitter:image" content="https://tapshalkar.xyz/static/media/me.62a387da.png" />
            </Helmet>

            <OverlayScrollbarsComponent style={{"background-image": `url(${bgImg})`}} className={"page-wrapper"}>
                <BlogpostContainer posts={props.data} />
            </OverlayScrollbarsComponent>
        </main>

)
}


export default Blog