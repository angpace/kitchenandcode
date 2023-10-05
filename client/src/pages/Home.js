import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import { useState,useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
import BlogInfo from "../BlogInfo/BlogInfo";
 

function Home ({search, currentUser}) {
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
        <BlogInfo currentUser={currentUser} search={search}/>
    
        </div>
        
    )
}

export default Home;