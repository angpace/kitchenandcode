import React from "react";
import { Link } from 'react-router-dom';
import { NavbarContainer, Title, NavItem, NavItem1,  } from "./NavElements.js"



const Nav = () => {

return (
    <NavbarContainer>
      <NavItem1>
      <Title as={Link} to="/">Kitchen & Code</Title>
      </NavItem1>
      <NavItem as={Link} to="/blogs/tech" >Tech</NavItem>
      <NavItem as={Link} to="/blogs/food" >Food</NavItem>
      <NavItem as={Link} to="/about" >About</NavItem> 
      <NavItem>
        <a  href="https://www.instagram.com/kitchenandcode/?hl=en"><i className="fa-brands fa-instagram fa-lg"></i></a>
        <a  href="https://www.linkedin.com/in/angpace/"><i className="fa-brands fa-linkedin fa-lg"></i></a>
        </NavItem>
    </NavbarContainer>
)

}

export default Nav