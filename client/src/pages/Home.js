import { useNavigate } from "react-router-dom";
import Bloglead from "../components/BlogLead/Bloglead";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import { useState,useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
 

function Home () {
    // const FadeUp = batch(Fade(), Sticky());
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
            <Header/>
            <Carousel featured={featured} getBlog={getBlog}/>   
            <Bloglead/> 
        </div>
        
    )
}

export default Home;