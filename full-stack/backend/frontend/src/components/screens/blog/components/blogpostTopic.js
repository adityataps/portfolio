import React from 'react'
import './stylesheets/blogpostTopic.css'

function BlogpostTopic(props) {

    const topic = props.topic
    const subtopic = props.subtopic

    return (
        <TopicColor topic={topic} subtopic={subtopic} />
    )
}

function TopicColor(props) {

    const topic = props.topic
    const subtopic = props.subtopic

    switch(topic) {
        case 1:
            return(<div>
                <b className={"topic-text food"}> Food </b>
                {/*<br />*/}
                <b className={"topic-text food-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 2:
            return(<div>
                <b className={"topic-text programming"}> Programming </b>
                {/*<br />*/}
                <b className={"topic-text programming-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 3:
            return(<div>
                <b className={"topic-text lifestyle"}> Lifestyle </b>
                {/*<br />*/}
                <b className={"topic-text lifestyle-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 4:
            return(<div>
                <b className={"topic-text opinion"}> Opinion </b>
                {/*<br />*/}
                <b className={"topic-text opinion-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 5:
            return(<div>
                <b className={"topic-text tv"}> TV and Movies </b>
                {/*<br />*/}
                <b className={"topic-text tv-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 6:
            return(<div>
                <b className={"topic-text gaming"}> Gaming </b>
                {/*<br />*/}
                <b className={"topic-text gaming-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 7:
            return(<div>
                <b className={"topic-text art"}> Art </b>
                {/*<br />*/}
                <b className={"topic-text art-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 8:
            return(<div>
                <b className={"topic-text diy"}> DIY </b>
                {/*<br />*/}
                <b className={"topic-text diy-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 9:
            return(<div>
                <b className={"topic-text leet"}> Prep </b>
                {/*<br />*/}
                <b className={"topic-text leet-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 10:
            return(<div>
                <b className={"topic-text interviews"}> Interviews </b>
                {/*<br />*/}
                <b className={"topic-text interviews-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 11:
            return(<div>
                <b className={"topic-text podcasts"}> Podcasts </b>
                {/*<br />*/}
                <b className={"topic-text podcasts-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 12:
            return(<div>
                <b className={"topic-text books"}> Books and Literature </b>
                {/*<br />*/}
                <b className={"topic-text books-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 13:
            return(<div>
                <b className={"topic-text reviews"}> Reviews </b>
                {/*<br />*/}
                <b className={"topic-text reviews-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        case 14:
            return(<div>
                <b className={"topic-text travel"}> Travel </b>
                {/*<br />*/}
                <b className={"topic-text travel-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
        default:
            return(<div>
                <b className={"topic-text unsorted"}> Unsorted </b>
                {/*<br />*/}
                <b className={"topic-text unsorted-sub"}>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;{subtopic} </b>
            </div>)
    }
}

export default BlogpostTopic