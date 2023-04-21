import Home from './components/Home';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Blogs from './components/Blogs';
import Login from './components/Login'
import { useEffect, useState } from 'react';
import BlogLay from './components/BlogLay';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Socials from './components/Socials';
import Subscribe from './components/Subscribe';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import toast, { Toaster } from 'react-hot-toast';
import Manage from './components/Manage';


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
        console.log(currentUser)
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
    <div>
      <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid>
            <Navbar.Brand className="logo" href="/">Angela Pace</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="logo" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Kitchen and Code
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-2">
                  <Nav.Link className="items" href="/about">About</Nav.Link>
                  <Nav.Link className="items" href="/blogposts">Blog</Nav.Link>
                  <Nav.Link className="items" href="/portfolio">Portfolio</Nav.Link>
                  <NavDropdown className="items"
                    title="Account"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                   {currentUser? 

                      <>
                      <NavDropdown.Item className="items" href="/your_account">Manage</NavDropdown.Item>
                        <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleLogOut} className="items" href="/">
                      Logout
                      </NavDropdown.Item>
                      </>

                      :

                      <>
                      <NavDropdown.Item className="items" href="/Subscribe">Subscribe</NavDropdown.Item>
                        <NavDropdown.Divider />
                       <NavDropdown.Item className="items" href="/login">
                       Login
                       </NavDropdown.Item>
                       </>

                      }  
            
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}



  
     

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogposts" element={<Blogs currentUser={currentUser}/>} />
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/:id" element={<BlogLay currentUser={currentUser}/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/subscribe" element={<Subscribe/>} />
          <Route path="/your_account" element={<Manage currentUser={currentUser} toast={toast} Toaster={Toaster}/>} />
          </Routes>
          <footer className='footer'>
              <Socials/>
          </footer>
    </div>
  );
}

export default App;
