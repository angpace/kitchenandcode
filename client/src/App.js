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
        {currentUser? 

          <div>
            <h3>Hi ang!</h3>
            <button onClick={handleLogOut}>Log out</button>
          </div>

        :

        <></>

        }

          <nav className='navbar'>
            <ol className='navlist'>
            

              <li><Link to="/"><i className="fa-solid fa-house-chimney"></i></Link></li>
              <li><Link to="/blogs"><i class="fa-regular fa-pen-to-square"></i></Link></li>
              <li><Link to="/portfolio"><i class="fa-regular fa-folder-open"></i></Link></li>
            </ol>
            </nav>
        

     

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
