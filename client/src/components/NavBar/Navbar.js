import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import pom from './pom2.png';
import { animateScroll as scroll } from 'react-scroll';



const NavBar = ({ currentUser, handleLogOut }) => {
  const [expanded, setExpanded] = useState(false);

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
          style={{ backgroundColor: '#fffef2', borderBottom: 'thin solid' }}
          fixed="top"
        >
          <Container fluid>
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
              <Offcanvas.Header style={{ backgroundColor: '#fffef2' }} closeButton>
                <Offcanvas.Title className="logo fs-1" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Kitchen and Code
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ backgroundColor: '#fffef2' }}>
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
                  <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blogposts" onClick={handleLinkClick}>
                    Blog
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>
                    Contact
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavBar;
