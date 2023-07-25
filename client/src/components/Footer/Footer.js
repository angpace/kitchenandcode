import React from 'react'
import { FooterFlex, FooterContent, FooterLinks, Link, FooterTitle, SocialMediaWrap } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  } 

  return (
    <FooterFlex>
        <FooterContent>
            <FooterLinks>
              <FooterTitle>Kitchen and Code</FooterTitle>
                  <Link to="/" onClick={toggleHome}>Home</Link>
                  <Link to="about" onClick={toggleHome}>About</Link>
                  <Link to="blogposts" onClick={toggleHome}>Blog</Link>
            </FooterLinks>
            <FooterLinks>
              <FooterTitle>Account</FooterTitle>
                  <Link to="subscribe" onClick={toggleHome}>Subscribe</Link>
                  <Link to="login" onClick={toggleHome}>Login</Link>
                  <Link to="contact" onClick={toggleHome}>Contact</Link>
                </FooterLinks>
                <SocialMediaWrap>
                    <a  href="https://www.linkedin.com/in/angpace/"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                    <a  href="https://github.com/angpace"><i className="fa-brands fa-github fa-lg" ></i></a>
                    <a  href="https://medium.com/@angpace13"><i className="fa-brands fa-medium fa-lg"></i></a>
                    <a  href="https://www.instagram.com/heyitspastry/?hl=en"><i className="fa-brands fa-instagram fa-lg"></i></a>
                </SocialMediaWrap>
        </FooterContent>
       
        <center> <small>© Kitchen and Code</small></center>
    </FooterFlex>
  )
}

export default Footer