import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function Subscribe(){
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
          } else if (res.status === 422){
            res.json()
            .then(data => toast.error(data.error[0]))
          }
        })
      }

    return(
        <div className="subscription">
          <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
        <center className="sub_text">
        <h3>Thank you for your interest in Kitchen and Code!</h3>
        <p>Sign up to receive email updates for new blog posts.</p>
        </center>
        <form className="subscribe" onSubmit={handleSubscription}>
          <input
          placeholder='Username'
          onChange={handleChange}
          name="name"
          />
          <input
          placeholder='Email'
          onChange={handleChange}
          name="email"

          />
          <input
          placeholder='Password'
          onChange={handleChange}
          name="password"
          type="password"
          />
          <button className="submit_subscription" type="submit">Sign Up</button>
          </form>
        </div>
    )
}

export default Subscribe;