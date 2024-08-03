import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactMeContainer, ContactMeHeading, FormContainer, Form, ContactMeContent, SendButton } from './ContactElements';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cybnnjz', 'template_urewjtr', form.current, 'HHr7Qfx5LVzinF9Ih')

    e.target.reset()
  };

  return (
    <ContactMeContainer>
      <ContactMeContent>
          <ContactMeHeading>Get in Touch</ContactMeHeading>
          <FormContainer>
            <Form ref={form} onSubmit={sendEmail}>
                <label for="name">Name</label>
                <input  type="text" name='name' required />

                <label for="email">Email</label>
                <input type="email" name='email' label='Email' required />

                <label for="message">Message</label>
                <textarea name="message" rows="7" required ></textarea> 

                <SendButton  type='submit'>Send</SendButton>
            </Form>
          </FormContainer>
      </ContactMeContent>
    </ContactMeContainer>
  )
}

export default Contact