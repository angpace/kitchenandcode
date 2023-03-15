import Home from './components/Home';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blogs from './components/Blogs';
import Login from './components/Login'
import { useEffect, useState } from 'react';
import BlogLay from './components/BlogLay';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';





function App() {
  const [currentUser, setCurrentUser] = useState(null)

  
  useEffect(() => {
    fetch(`/me`)
    .then (r =>{
      if (r.ok) {
        r.json().then(user => setCurrentUser(user))
      }
    })
  }, [])
  
  function handleLogOut() {
    fetch('/logout', {
      method: "DELETE"
    }).then(r => {
      if (r.ok) {
        setCurrentUser(null)
        console.log(currentUser)

      }
    })
  }

  function onLogin(user) {
    setCurrentUser(user)
    // navigate("/")
  }

  return (
    <div>

          <nav className='navbar'>
            <ul className='navlist'>
              <h1 className="logo"><a  className="logo_text" href="/">AP.</a></h1>
              <li><a className="items" href="/about">About</a></li>
              <li><a className="items" href="/blogposts">Blog</a></li>
              <li><a className="items" href="/portfolio">Portfolio</a></li>
            </ul>
            </nav>
            {currentUser? 

              <div className='padding'>
                <button onClick={handleLogOut}>Log out</button>
              </div>

              :

              <></>

            }
        

     

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogposts" element={<Blogs currentUser={currentUser}/>} />
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/:id" element={<BlogLay />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutMe/>} />
          </Routes>
    </div>
  );
}

export default App;
