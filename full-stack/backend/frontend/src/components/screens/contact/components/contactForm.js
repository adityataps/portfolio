import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './stylesheets/contactForm.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import { init, send } from 'emailjs-com'

function ContactForm() {

    const [toSend, setToSend] = useState({
        nameInput: '',
        emailInput: '',
        subject: '',
        message: '',
    })

    function handleChange(e) {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }

    function sendEmail(e) {
        e.preventDefault();
        init("user_H2OaygSGutUoMNRkjjljL");
        send("service_8m3v5yr", "template_uqxem09" , toSend, "user_H2OaygSGutUoMNRkjjljL")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div className={"form-container"}>
            <Form className={"form-contents"} onSubmit={sendEmail}>

                <Form.Group controlId={"nameInput"}>
                    <Form.Label> Name </Form.Label>
                    <Form.Control size={"sm"} type={"text"} placeholder={"aditya"} value={toSend.nameInput} onChange={handleChange}/>
                </Form.Group>

                <br />

                <Form.Group controlId={"emailInput"}>
                    <Form.Label> Email Address </Form.Label>
                    <Form.Control size={"sm"} type={"email"} placeholder={"aditya.taps@gmail.com"} value={toSend.emailInput} onChange={handleChange} />
                </Form.Group>

                <br />

                <Form.Group controlId={"subjectInput"}>
                    <Form.Label> Subject </Form.Label>
                    <Form.Control size={"sm"} type={"text"} placeholder={"nice website!"} value={toSend.subject} onChange={handleChange}  />
                </Form.Group>

                <br />

                <Form.Group controlId={"contact-text-input"}>
                    <Form.Label> Message </Form.Label>
                    <Form.Control size={"sm"} as={"textarea"} rows={1} placeholder={"let's link up!"} value={toSend.message} onChange={handleChange} />
                </Form.Group>

                <br />

                <Button className={"submit-button"} variant={"outline-primary"}> Submit </Button>

            </Form>
        </div>
    )

}

export default ContactForm