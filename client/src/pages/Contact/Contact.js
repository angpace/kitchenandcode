import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactMeContainer, ContactMeHeading, FormContainer, Form } from './ContactElements';
import { ConstructionPage, ImageContainer, Image } from '../../components/Construction/UnderCElements';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cybnnjz', 'template_urewjtr', form.current, 'HHr7Qfx5LVzinF9Ih')

    e.target.reset()
  };

  return (
    <ConstructionPage>
        <ImageContainer>
            <Image src="https://images.pexels.com/photos/5946062/pexels-photo-5946062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </ImageContainer>
    <ContactMeContainer>
      <ContactMeHeading>Contact Me</ContactMeHeading>
      <FormContainer>
        <Form ref={form} onSubmit={sendEmail}>
          <input style={{backgroundColor: "#fffef2", border: "thin solid"}} type="text" name='name' placeholder='Your Full Name' required />
          <input style={{backgroundColor: "#fffef2", border: "thin solid"}}type="email" name='email' placeholder='Your Email' required />
          <textarea style={{backgroundColor: "#fffef2", border: "thin solid"}}name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button  type='submit' className='btn btn-secondary'>Send Message</button>
        </Form>
      </FormContainer>
    </ContactMeContainer>
    </ConstructionPage>
  )
}

export default Contact