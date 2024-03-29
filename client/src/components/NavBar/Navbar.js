import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import pom from './pom2.png';
import { animateScroll as scroll } from 'react-scroll';



const NavBar = ({ currentUser, handleLogOut, setSearch }) => {
  const [expanded, setExpanded] = useState(false);
  const me = "angpace13@gmail.com";

  const handleLinkClick = () => {
    setExpanded(false);
    scroll.scrollToTop();
  };



  return (
    <div >
      {['sm'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          expanded={expanded}
          style={{ backgroundColor: "rgba(225,232,238,0.95)"}}
          fixed="top"
        >
          <Container >
            <a className="navbar-brand" href="/" >
              <img
                src={pom}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />{' '}
              Kitchen and Code
            </a>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={expanded}
              onHide={() => setExpanded(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="logo fs-1" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Kitchen and Code
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="navbar-nav ms-auto px-3">
                  {currentUser && me === currentUser.email?
                   <Nav.Link as={Link} to="/post" onClick={handleLinkClick}>
                      Post
                  </Nav.Link>
                 :
                 <></>

                  }
                  <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blogs/tech" onClick={handleLinkClick}>
                    Tech
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blogs/food" onClick={handleLinkClick}>
                    Food
                  </Nav.Link>
                  <NavDropdown title="Join" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    {currentUser ? 
                      <>
                        <NavDropdown.Item
                          className="dropdown-item"
                          as={Link}
                          to="/your_account"
                          onClick={handleLinkClick}
                        >
                          Manage
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                          className="dropdown-item"
                          href='/'
                          onClick={handleLogOut}
                        >
                          Logout
                        </NavDropdown.Item>
                      </>
                     : 
                      <>
                        <NavDropdown.Item
                          className="dropdown-item"
                          as={Link}
                          to="/subscribe"
                          onClick={handleLinkClick}
                        >
                          Subscribe
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                          className="dropdown-item"
                          as={Link}
                          to="/login"
                          onClick={handleLinkClick}
                        >
                          Login
                        </NavDropdown.Item>
                      </>
                    }
                  </NavDropdown>
                </Nav>
                <form onSubmit={(e) => e.preventDefault()} class="form-inline my-0 my-sm-0">
                  <input class="form-control mr-sm-3" onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search keywords" aria-label="Search"/>
                </form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavBar;
