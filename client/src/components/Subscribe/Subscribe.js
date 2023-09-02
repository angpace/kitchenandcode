import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
// import { FormContainer } from "../../pages/Contact/ContactElements";
import { SubscribeContainer, FormContainer, SubscribeButton, LoginOnSubscirbe, Form } from "./SubscribeElements";

function Subscribe(){
  const nav = useNavigate()
    const [subscriber, setSubscriber] = useState({
        name: "",
        email: "",
        password: "",
      })


      function handleChange(e){
        const {name, value} = e.target
       setSubscriber({...subscriber, [name]: value})
       
     }
   
      function handleSubscription(e){
        e.preventDefault()
        fetch('/users', {
          method: "POST",
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify({
            name: subscriber.name,
            email: subscriber.email,
            password: subscriber.password
          }) 
        })
        .then(res => {
          if (res.status === 200){
            res.json()
            .then(data => console.log(data))
            toast.success("Thanks for subscribing!")
            nav("/login")
          } else if (res.status === 422){
            res.json()
            .then(data => toast.error(data.error[0]))
          }
        })
        e.target.reset();
      }

    return(
      <SubscribeContainer>
          <Toaster
                position="bottom-right"
                reverseOrder={false}
              />

              <p>Interested in more? Subscribe here.</p>
        <FormContainer>
          <Form id="subscribe" onSubmit={handleSubscription}>
              <input
                style={{backgroundColor: "#fffef2", border: "thin solid"}}
                placeholder='Username'
                onChange={handleChange}
                name="name"
                />
                <input
                style={{backgroundColor: "#fffef2", border: "thin solid"}}
                placeholder='Email'
                onChange={handleChange}
                name="email"

                />
                <input
                style={{backgroundColor: "#fffef2", border: "thin solid"}}
                placeholder='Password'
                onChange={handleChange}
                name="password"
                type="password"
                />
                <SubscribeButton className='btn btn-secondary' type="submit">Subscribe</SubscribeButton>
          </Form>
        </FormContainer>
        <p>Already a subscriber? <LoginOnSubscirbe>Login.</LoginOnSubscirbe></p>
      </SubscribeContainer>
        // <LoginContainer>
        //   <Toaster
        //       position="bottom-right"
        //       reverseOrder={false}
        //     />
        // <center className="sub_text">
        // <h3>Thank you for your interest in Kitchen and Code!</h3>
        // <p>Sign up to receive email updates for new blog posts.</p>
        // </center>
        // <Contain>
        // <Form className="subscribe" id="subscribe" onSubmit={handleSubscription}>
        //   <input
        //   style={{backgroundColor: "#fffef2", border: "thin solid"}}
        //   placeholder='Username'
        //   onChange={handleChange}
        //   name="name"
        //   />
        //   <input
        //   style={{backgroundColor: "#fffef2", border: "thin solid"}}
        //   placeholder='Email'
        //   onChange={handleChange}
        //   name="email"

        //   />
        //   <input
        //   style={{backgroundColor: "#fffef2", border: "thin solid"}}
        //   placeholder='Password'
        //   onChange={handleChange}
        //   name="password"
        //   type="password"
        //   />
        //   <button className='btn btn-secondary' type="submit">Sign Up</button>
        //   </Form>
        //   </Contain>
        // </LoginContainer>
    )
}

export default Subscribe;