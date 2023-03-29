import { useState } from "react";

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
          } else if (res.status === 422){
            res.json()
            .then(data => console.log(data))
          }
        })
      }

    return(
        <>
        <h3>Thank you for your interest in Kitchen and Code!</h3>
        <p>Sign up to recieve email updates!</p>
        <form onSubmit={handleSubscription}>
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
          />
          <button type="submit">Enter</button>
          </form>
        </>
    )
}

export default Subscribe;