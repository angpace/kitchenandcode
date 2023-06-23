import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from "react-router-dom"


function Login ({onLogin}){
  const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
      })

      function handleChange(e) {
        const { name, value } = e.target
        console.log(login)
        setLogin({
          ...login, [name]: value
        })
      }

      function handleLogin(e) {
        e.preventDefault();
        console.log(login)
        fetch("/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: login.email,
            password: login.password
          })
        })
        .then(res => {
          if (res.status === 200) {
            res.json()
            .then(data => onLogin(data))
            navigate('/')
            
          }
          else if (res.status === 401) { 
            res.json()
            .then(data => console.log(data))
            toast.error("Something went wrong. Please check your credentials.")
          }})

        }
        
        

    return (
        <div className="padding">
           <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
          <div>
        
        <div className="login">
        <h3>Login to manage your subscription.</h3>
            <form action="#" onSubmit={handleLogin}>
                <input
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                />
                <input
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <button className="submit_subscription" type="submit">Login</button>
            </form>
            </div>
        </div>
    </div>
    )
}

export default Login;