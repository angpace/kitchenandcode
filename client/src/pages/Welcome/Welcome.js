import React from 'react'
import { WelcomeButton, WelcomeHeading, WelcomePage, Bell } from './WelcomeElements'
import {useNavigate } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'
import { animateScroll as scroll } from 'react-scroll';
import { useState,useEffect } from "react";


const Welcome = () => {
    let nav = useNavigate()
    const [featuredPosts, setFeaturedPosts] = useState([])

    useEffect(() => {
      fetch("/blogs")
      .then(res => res.json())
      .then(data => setFeaturedPosts(data))
    }, [])
  
    function getBlog(id){
      if (id){
          nav(`/${id}`)
      }
      scroll.scrollToTop()
    }

    const featured = featuredPosts.filter((b) => b.featured === true)

  return (
    <>
    <Carousel featured={featured} getBlog={getBlog}/>
    <WelcomePage>
     
        <WelcomeHeading>Kitchen and Code</WelcomeHeading>
        <WelcomeButton onClick={() => nav("/home")}>Come on in → </WelcomeButton>
    </WelcomePage>
    </>
  )
}

export default Welcome