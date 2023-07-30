import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import { Form } from "../Contact/ContactElements";
import { Contain, LoginContainer } from "./LoginElements";


function Login ({onLogin}){
  const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
      })

      function handleChange(e) {
        const { name, value } = e.target
        setLogin({
          ...login, [name]: value
        })
      }

      function handleLogin(e) {
        e.preventDefault();
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
        <LoginContainer>
           <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
        
        <center className="sub_text">
        <h3>Welcome back! Login below.</h3>
        </center>
        <Contain>
            <Form action="#" onSubmit={handleLogin}>
                <input
                    style={{backgroundColor: "#fffef2", border: "thin solid"}}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                />
                <input
                    style={{backgroundColor: "#fffef2", border: "thin solid"}}
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <button className='btn btn-secondary'type="submit">Login</button>
                </Form>
              </Contain>
            </LoginContainer>
           
    )
}

export default Login;