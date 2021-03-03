import React, { useState } from 'react'
import './stylesheets/contactForm.css'
import Form from 'react-bootstrap/Form'

function ContactForm() {

    return (
        <div className={"form-container"}>
            <Form>

                <Form.Group controlId={"emailInput"}>
                    <Form.Label> Email Address </Form.Label>
                    <Form.Control type={"email"} placeholder={"aditya.taps@gmail.com"} size={"lg"} />
                </Form.Group>

                <br />

                <Form.Group controlId={"subjectInput"}>
                    <Form.Label> Subject </Form.Label>
                    <Form.Control size={"lg"} type={"text"} placeholder={"nice website!"}  />
                </Form.Group>

                <br />

                <Form.Group controlId={"contact-text-input"}>
                    <Form.Label> Message </Form.Label>
                    <Form.Control as={"textarea"} rows={8} />
                </Form.Group>

            </Form>
        </div>
    )

}

export default ContactForm