import React from 'react'
import { NavbarContainer, Logo, NavLink } from './NewNavElements.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import pom from '../NavBar/pom2.png';

const NewNavBar = () => {
  const [expanded, setExpanded] = useState(false);


  return (
    <NavbarContainer>
      {['sm'].map((expand) => (
         <Navbar
         key={expand}
         expand={expand}
         expanded={expanded}
       >
        <Logo as={Link} to="/">Kitchen and Code</Logo>
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
                <Nav className="navbar-nav ms-auto px-4">
                  <NavLink as={Link} to="/blogs/food" >
                    Food
                  </NavLink>
                  <NavLink as={Link} to="/blogs/tech" >
                    Tech
                  </NavLink>
                  <NavLink as={Link} to="/subscribe">
                    Subscribe
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Navbar>
))}
    </NavbarContainer>
  )
}

export default NewNavBar;