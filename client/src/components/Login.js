import { useState } from "react";

function Login ({onLogin}){
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
            console.log("yay")
            res.json()
            .then(data => onLogin(data))
          }
          else if (res.status === 401) { 
            alert.show("Invalid Username or Password.")
        
          }})

        }
        
        

    return (
        <div className="form-container sign-in-container">
          <div>
        <h3>Login below</h3>
        <div>
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
                <button type="submit">Login</button>
            </form>
            </div>
        </div>
    </div>
    )
}

export default Login;