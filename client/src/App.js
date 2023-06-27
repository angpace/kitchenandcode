import Home from './pages/Home';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Blogs from './components/Blogs';
import Login from './pages/Login'
import { useEffect, useState } from 'react';
import BlogLay from './components/BlogLay';
import Nav from "./components/NavBar/Navbar.js"
import Manage from './components/Manage';
import Subscribe from './pages/Subscribe'
import toast, { Toaster } from 'react-hot-toast';
import About from "./pages/About/About"
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';


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
  
  function handleLogOut(e) {
    e.preventDefault()
    fetch('/logout', {
      method: "DELETE"
    }).then(r => {
      if (r.ok) {
        setCurrentUser(null)
      }
    })
    toast(`See you soon!`, {
      icon: '👋'
    })
  }

  function onLogin(user) {
    setCurrentUser(user)
    toast(`Welcome, ${user.name}!`, {
      icon: '👋',
    })
  }

  return (
    <div >
      <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
        <Nav currentUser={currentUser} handleLogOut={handleLogOut}/>
        

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blogs currentUser={currentUser}/>} />
          <Route path="blogs/:id" element={<Category/>} />
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/:id" element={<BlogLay currentUser={currentUser}/>} />
          <Route path="/subscribe" element={<Subscribe/>} />
          <Route path="/your_account" element={<Manage currentUser={currentUser} toast={toast} Toaster={Toaster}/>} />
          </Routes>
      <Footer/>
    </div>
  );
}

export default App;
