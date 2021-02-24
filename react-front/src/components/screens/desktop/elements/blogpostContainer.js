import React from 'react'
import './stylesheets/blogpostContainer.css'
import parse from 'html-react-parser'
import BlogpostTopic from './blogpostTopic'
import ScrollableSection from 'react-update-url-on-scroll'

function BlogpostContainer(props) {

    const unSortedPosts = props.posts.data;
    let posts = null;

    if (unSortedPosts) {
        posts = unSortedPosts.sort((first, second) => second.date.localeCompare(first.date))
    }

    return (
        <div className={"posts-wrapper"}>

            {posts !== null ? posts.map((post) => (
                <div key={post.date} className={"blogpost-container"}>

                    <ScrollableSection hash={post.date}>
                        <div className={"single-post-container"}>

                            <BlogpostTopic className={"post-topic"} topic={post.topic} />

                            <div className={"post-title"}>
                                {post.title}
                            </div>

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
                    </ScrollableSection>

                </div>
            )) : null}

        </div>
    )
}

export default BlogpostContainer