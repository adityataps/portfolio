import React, {useEffect, useState} from 'react'
import './stylesheets/blogpostContainer.css'
import parse from 'html-react-parser'
import BlogpostTopic from './blogpostTopic'
import {Link, NavLink, useLocation} from "react-router-dom";
import queryString from 'query-string';
import 'overlayscrollbars/css/OverlayScrollbars.css'
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import ShareContainer from "./blogpostShareContainer";
import bgImg from "../../../media/switz.jpg";
import {Helmet} from "react-helmet";

function BlogpostContainer(props) {

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

    let posts = props.posts.sort((first, second) => second.date.localeCompare(first.date))
    let query = queryString.parse(useLocation().search).post

    if (query) {
        posts = [posts.find(({date}) => date === query)]
        if (!posts || !posts[0]) {
            posts = props.posts.sort((first, second) => second.date.localeCompare(first.date))
        }
    }

    return (
        <OverlayScrollbarsComponent
            className={`${posts.length <= 1 ? "" : "condensed"} posts-wrapper ${isMobile ? "mobile" : ""}`}
            options={{
                overflowBehavior: {x: "hidden"},
                className: "os-theme-dark"
        }}>
            <div style={{"margin": "0 auto 0"}}>

                <div className={`${isMobile ? "mobile" : ""} blogpost-container`}>
                    {posts.map((post) =>
                        <div key={post.date}>
                            {
                                posts.length <= 1 ?
                                    // <div className={"blogpost-container"}>
                                    <BuildPost props={post} mobile={isMobile}/>
                                    // </div>
                                    :
                                    // <div className={"blogpost-container condensed"}>
                                    <BuildCondensed props={post}/>
                                // </div>
                            }
                        </div>
                    )}
                </div>

            </div>

        </OverlayScrollbarsComponent>
    )
}

function BuildPost(props) {
    let post = props.props
    let isMobile = props.mobile

    let url = window.location.href

    if (post) {
        return (

            <main>

                <Helmet>
                    <title>{`${post.title} - Aditya Tapshalkar`}</title>
                    <meta name={"description"} content={"A blog post by Aditya Tapshalkar"} />

                    <meta itemProp="name" content={post.title} />
                    <meta itemProp="description" content={"A blog post by Aditya Tapshalkar"} />
                    <meta itemProp="image" content="" />

                    <meta property="og:url" content={url} />
                    <meta property="og:type" content={"website"} />
                    <meta property="og:title" content={post.title} />
                    <meta property="og:description" content={"A blog post by Aditya Tapshalkar"} />
                    <meta property="og:image" content="" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={post.title} />
                    <meta name="twitter:description" content={"A blog post by Aditya Tapshalkar"} />
                    <meta name="twitter:image" content="" />
                </Helmet>


                <div className={`${isMobile ? "mobile" : ""} single-post-container`}>

                    <Link to={"/blog"} className={`${isMobile ? "mobile" : ""} go-back`}>
                        &#x21DC; back
                    </Link>

                    <div className={"post-topic"}>
                        <BlogpostTopic topic={post.topic} subtopic={post.subtopic} />
                    </div>

                    <div className={"post-title"}>
                        {post.title}
                    </div>

                    <div style={{display: `${isMobile ? "block" : "flex"}`}}>

                        <div className={"post-date"}>
                            Last edited on&nbsp;
                            {new Intl.DateTimeFormat("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit"
                            }).format(new Date(post.date))}
                        </div>

                        <ShareContainer />
                    </div>

                    <hr style={{margin: "25px auto 50px"}}/>

                    <div className={"post-content"}>
                        {parse(post.content)}
                    </div>

                </div>
            </main>

        )
    }
    return null
}

function BuildCondensed(props) {
    let post = props.props
    if (post) {
        return (
            <NavLink className={"condensed-card"} to={`/blog?post=${post.date}`}>

                <br />
                <div className={"single-post-container condensed"}>
                    <div className={"post-topic condensed"}>
                        <BlogpostTopic topic={post.topic} subtopic={post.subtopic}/>
                    </div>

                    {/*<br />*/}

                    <div className={"post-title condensed"}>
                        {post.title}
                    </div>

                    <div className={`post-date condensed`}>
                        Last edited on&nbsp;
                        {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                        }).format(new Date(post.date))}
                    </div>

                </div>

                {/*<hr />*/}

            </NavLink>
        )
    }
    return null
}


export default BlogpostContainer