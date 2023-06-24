import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import pom from './pom2.png'


const NavBar = ({currentUser, handleLogOut}) => {

  return (
    <div>
    
        {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} style={{backgroundColor: "#faf0e6"}}>
          <Container fluid>
      {/* <a class="navbar-brand" href="/">
        <img src={pom} width="30" height="30" class="d-inline-block align-top" alt=""/> Kitchen and Code
      </a> */}
            <Navbar.Brand className="logo fs-1" href="/">Kitchen and Code</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header style={{backgroundColor: "#faf0e6"}} closeButton>
                <Offcanvas.Title className="logo fs-1" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Kitchen and Code
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{backgroundColor: "#faf0e6"}}>
                <Nav >
                  <Nav.Link  href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link  href="/blogposts">Blog</Nav.Link>
                  <NavDropdown
                    title="Account"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                   {currentUser? 

                      <>
                      <NavDropdown.Item  href="/your_account">Manage</NavDropdown.Item>
                        <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleLogOut} className="items" href="/">
                      Logout
                      </NavDropdown.Item>
                      </>

                      :

                      <>
                      <NavDropdown.Item  href="/Subscribe">Subscribe</NavDropdown.Item>
                        <NavDropdown.Divider />
                       <NavDropdown.Item  href="/login">
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
    </div>
  )
}

export default NavBar;