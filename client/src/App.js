import Home from './components/Home';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blogs from './components/Blogs';
import Login from './components/Login'
import { useEffect, useState } from 'react';



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

  console.log(currentUser)

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
      <h1>Kitchen and Code</h1> 
      {currentUser? 

        <div>
          <h3>Hi ang!</h3>
          <button onClick={handleLogOut}>Log out</button>
        </div>

      :

      <></>

      }
      <nav>
            <ul className='navlist'>
              <li><Link to="/">
                <img src="https://www.iconpacks.net/icons/1/free-home-icon-1235-thumb.png" alt="houseIcon" className='houseIcon'></img>
                </Link></li>
              <li><Link to="/blogs">
                <img src="https://cdn-icons-png.flaticon.com/512/16/16294.png" alt="quill" className='quill'></img>
                </Link></li>
            </ul>
          </nav>  

     

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
        </Routes>
    </div>
  );
}

export default App;
