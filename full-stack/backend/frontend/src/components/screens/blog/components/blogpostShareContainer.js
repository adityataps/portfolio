import React from 'react'
import './stylesheets/blogpostShareContainer.css'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,

    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";



function ShareContainer() {

    const postUrl = window.location.href;
    const quote = "check out this totally cool " +
        "blog post made by this totally cool dude aditya tapshalkar"

    return (
        <div className={"share-container"}>

            <EmailShareButton
                url={postUrl}
                quote={quote}>
                <EmailIcon size={32} />
            </EmailShareButton>

            <FacebookShareButton
                url={postUrl}
                quote={quote}>
                <FacebookIcon size={32} />
            </FacebookShareButton>

            <TwitterShareButton
                url={postUrl}
                quote={quote}>
                <TwitterIcon size={32} />
            </TwitterShareButton>

            <LinkedinShareButton
                url={postUrl}
                quote={quote}>
                <LinkedinIcon size={32} />
            </LinkedinShareButton>

            <WhatsappShareButton
                url={postUrl}
                quote={quote}>
                <WhatsappIcon size={32} />
            </WhatsappShareButton>

        </div>
    )
}

export default ShareContainer