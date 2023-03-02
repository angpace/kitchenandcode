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
            <ol className='navlist'>
              <li><Link to="/"><i className="fa-solid fa-house-chimney fa-lg"></i></Link></li>
              <li><Link to="/blogs"><i className="fa-regular fa-pen-to-square fa-lg"></i></Link></li>
              <li><Link to="/portfolio"><i className="fa-regular fa-folder-open fa-lg"></i></Link></li>
              <li><Link to="/about"><i className="fa-regular fa-address-card fa-lg"></i></Link></li>
            </ol>
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
          <Route path="/blogs" element={<Blogs currentUser={currentUser}/>} />
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/:id" element={<BlogLay />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutMe/>} />
          </Routes>
    </div>
  );
}

export default App;
