import Home from './components/Home';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blogs from './components/Blogs';
import Login from './components/Login'
import { useEffect, useState } from 'react';
import SampleLogo from './SampleLogo.png'
import BlogLay from './components/BlogLay';
import Portfolio from './components/Portfolio';




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
      <img alt="logo" src={SampleLogo} className="logo" />
        {currentUser? 

          <div>
            <h3>Hi ang!</h3>
            <button onClick={handleLogOut}>Log out</button>
          </div>

        :

        <></>

        }

  
            <ul className='navlist'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blogs"> Blog</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
        

     

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blogs currentUser={currentUser}/>} />
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/:id" element={<BlogLay />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </div>
  );
}

export default App;
