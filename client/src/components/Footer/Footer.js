import React from 'react'
import { FooterFlex, FooterContent, FooterLinks, Link, FooterTitle, SocialMediaWrap } from './FooterElements'

const Footer = () => {
  return (
    <FooterFlex>
        <FooterContent>
            <FooterLinks>
              <FooterTitle>Kitchen and Code</FooterTitle>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/blog">Blog</Link>
            </FooterLinks>
            <FooterLinks>
              <FooterTitle>Account</FooterTitle>
                  <Link to="/subscribe">Subscribe</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/contact">Contact</Link>
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