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

  const handleLinkClick = (e) => {
    setExpanded(false);
    scroll.scrollToTop();
    setSearch(e.target.text)
  };

  return (
    <div >
      {['sm'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          expanded={expanded}
          style={{ backgroundColor: '#FAF9F6'}}
          fixed="top"
        >
          <Container >
            <a className="navbar-brand" href="/">
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
                  <Nav.Link as={Link} to="/" onClick={handleLinkClick}>
                    Home
                  </Nav.Link>
                  <Nav.Link onClick={(e) => handleLinkClick(e)}>
                    Tech
                  </Nav.Link>
                  <Nav.Link onClick={(e) => handleLinkClick(e)}>
                    Food
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>
                    Contact
                  </Nav.Link> */}
                </Nav>
                <form class="form-inline my-0 my-sm-0">
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
