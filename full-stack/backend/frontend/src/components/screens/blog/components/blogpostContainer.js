import React, {useEffect, useState} from 'react'
import './stylesheets/blogpostContainer.css'
import parse from 'html-react-parser'
import BlogpostTopic from './blogpostTopic'
import {Link, NavLink} from "react-router-dom";

import 'overlayscrollbars/css/OverlayScrollbars.css'
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import ShareContainer from "./blogpostShareContainer";
import bgImg from "../../../media/switz.jpg";

function BlogpostContainer(props) {

    const unsortedPosts = props.posts;
    let posts = null;

    if (unsortedPosts) {
        posts = unsortedPosts.sort((first, second) => second.date.localeCompare(first.date))
    }

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
        <OverlayScrollbarsComponent
            className={`${posts !== null && unsortedPosts.length <= 1 ? "" : "condensed"} posts-wrapper ${isMobile ? "mobile" : ""}`}
            options={{
                overflowBehavior: {x: "hidden"},
                className: "os-theme-dark"
        }}>
            <div style={{"margin": "0 auto 0"}}>

                <div className={`${isMobile ? "mobile" : ""} blogpost-container`}>
                    {posts !== null ? posts.map((post) => (
                        <div key={post.date}>
                            {
                                unsortedPosts.length <= 1 ?
                                    // <div className={"blogpost-container"}>
                                    <BuildPost props={post} mobile={isMobile} />
                                    // </div>
                                    :
                                    // <div className={"blogpost-container condensed"}>
                                    <BuildCondensed props={post} />
                                // </div>
                            }
                        </div>
                    )) : null}
                </div>

            </div>

        </OverlayScrollbarsComponent>
    )
}

function BuildPost(props) {
    let post = props.props
    let isMobile = props.mobile

    if (post) {
        return (

            <div className={`${isMobile ? "mobile" : ""} single-post-container`}>

                <Link to={"/blog"} className={"go-back"}>
                    &#x21DC; back
                </Link>

                <div className={"post-topic"}>
                    <BlogpostTopic topic={post.topic} subtopic={post.subtopic} />
                </div>

                <div className={"post-title"}>
                    {post.title}
                </div>

                {/*<NavLink className={"share-post"} to={"/blog/" + post.date}>*/}
                {/*    Share*/}
                {/*</NavLink>*/}

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
        )
    }
    return null
}

function BuildCondensed(props) {
    let post = props.props
    if (post) {
        return (
            <NavLink className={"condensed-card"} to={"/blog/" + post.date}>

                <div className={"single-post-container condensed"}>
                    <div className={"post-topic condensed"}>
                        <BlogpostTopic topic={post.topic} subtopic={post.subtopic}/>
                    </div>

                    {/*<br />*/}

                    <div className={"post-title condensed"}>
                        {post.title}
                    </div>

                    <div className={"post-date condensed"}>
                        Last edited on&nbsp;
                        {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                        }).format(new Date(post.date))}
                    </div>

                </div>

                <hr />

            </NavLink>
        )
    }
    return null
}


export default BlogpostContainer