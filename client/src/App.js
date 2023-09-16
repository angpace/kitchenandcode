import Home from './pages/Home';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/SubscribeandLogin/Login'
import { useEffect, useState } from 'react';
import BlogLay from './components/BlogLay/BlogLay';
import Nav from "./components/NavBar/Navbar.js"
import Manage from './pages/SubscribeandLogin/Manage';
import Subscribe from './pages/SubscribeandLogin/Subscribe'
import toast, { Toaster } from 'react-hot-toast';
import About from "./pages/About/About"
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';
import Contact from './pages/Contact/Contact';
import NewNav from './components/NewNav/NewNav';


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
       {/* <Nav currentUser={currentUser} handleLogOut={handleLogOut}/> */}
       <NewNav/>
        

        {/* Routes */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route path="/blogposts" element={<Blogs currentUser={currentUser}/>} />
          <Route path="/blogs/:id" element={<Category/>} />
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
