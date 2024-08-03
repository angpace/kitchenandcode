import React from "react";
import { Link } from 'react-router-dom';
import { NavbarContainer, NavItem, NavItem1,  } from "./NavElements.js"
import { Title } from "../UniversalElements.js";



const Nav = ({currentUser, handleLogOut}) => {
  const me = "angpace13@gmail.com";

return (
    <NavbarContainer>
      <NavItem1>
      <Title as={Link} to="/">Kitchen & Code</Title>
      </NavItem1>
      {currentUser && me === currentUser.email?
      <>
      <NavItem as={Link} to="/post" >Post</NavItem> 
      <NavItem as={Link} to="/"
                          onClick={handleLogOut} >logout</NavItem>
      </>
      :
      <></>
    }
      <NavItem as={Link} to="/blogs/tech" >Tech</NavItem>
      <NavItem as={Link} to="/blogs/food" >Food</NavItem>
      <NavItem as={Link} to="/about" >About</NavItem> 
      <NavItem as={Link} to="/contact" >Contact</NavItem> 
      <NavItem>
        <a  href="https://www.instagram.com/kitchenandcode/?hl=en"><i className="fa-brands fa-instagram fa-lg"></i></a>
        <a  href="https://www.linkedin.com/in/angpace/"><i className="fa-brands fa-linkedin fa-lg"></i></a>
        </NavItem>
    </NavbarContainer>
)

}

export default Nav