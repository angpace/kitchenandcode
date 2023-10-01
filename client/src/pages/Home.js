import { useNavigate } from "react-router-dom";
import Bloglead from "../components/BlogLead/Bloglead";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import { useState,useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
import Blogs from "./Blogs/Blogs";
 

function Home () {
    const navigate = useNavigate()
    const [featuredPosts, setFeaturedPosts] = useState([])

  useEffect(() => {
    fetch("/blogs")
    .then(res => res.json())
    .then(data => setFeaturedPosts(data))
  }, [])

 
  const featured = featuredPosts.filter((b) => b.featured === true)

  

  function getBlog(id){
    if (id){
        navigate(`/${id}`)
    }
    scroll.scrollToTop()
  }

    return (
       <div>
        <Carousel featured={featured} getBlog={getBlog}/>
        </div>
        
    )
}

export default Home;