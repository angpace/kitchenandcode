import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactMeContainer, ContactMeHeading, FormContainer, Form } from './ContactElements';
import { BlogLayContainer, FeatureContain, Feature } from '../../components/BlogLay/BloglayElements';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cybnnjz', 'template_urewjtr', form.current, 'HHr7Qfx5LVzinF9Ih')

    e.target.reset()
  };

  return (
    <BlogLayContainer>
      <FeatureContain>
          <Feature src="https://images.pexels.com/photos/5946058/pexels-photo-5946058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      </FeatureContain>

    <ContactMeContainer>
      <ContactMeHeading>Contact Me</ContactMeHeading>
      <FormContainer>
        <Form ref={form} onSubmit={sendEmail}>
          <input  type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button  type='submit' className='btn btn-secondary'>Send Message</button>
        </Form>
      </FormContainer>
    </ContactMeContainer>
    </BlogLayContainer>
  )
}

export default Contact