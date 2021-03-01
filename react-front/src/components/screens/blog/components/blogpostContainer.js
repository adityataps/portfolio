import React  from 'react'
import './stylesheets/blogpostContainer.css'
import parse from 'html-react-parser'
import BlogpostTopic from './blogpostTopic'
import { NavLink } from "react-router-dom";

import 'overlayscrollbars/css/OverlayScrollbars.css'
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import ShareContainer from "./blogpostShareContainer";

function BlogpostContainer(props) {

    const unsortedPosts = props.posts;
    let posts = null;

    if (unsortedPosts) {
        posts = unsortedPosts.sort((first, second) => second.date.localeCompare(first.date))
    }

    return (
        <OverlayScrollbarsComponent className={"posts-wrapper"} options={{
            className: "os-theme-light"
        }}>
            <div style={{"margin": "8% auto 5%"}}>

                <div className={"blogpost-container"}>
                    {posts !== null ? posts.map((post) => (
                        <div key={post.date}>
                            {
                                unsortedPosts.length <= 1 ?
                                    // <div className={"blogpost-container"}>
                                    <BuildPost props={post} />
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
    if (post) {
        return (
            <div className={"single-post-container"}>

                <div className={"post-topic"}>
                    <BlogpostTopic topic={post.topic} subtopic={post.subtopic} />
                </div>

                <div className={"post-title"}>
                    {post.title}
                </div>

                {/*<NavLink className={"share-post"} to={"/blog/" + post.date}>*/}
                {/*    Share*/}
                {/*</NavLink>*/}

                <ShareContainer />

                <div className={"post-date"}>
                    Last edited on&nbsp;
                    {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit"
                    }).format(new Date(post.date))}
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