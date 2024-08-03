import { useNavigate } from "react-router-dom";
// import Carousel from "../../components/Carousel/Carousel";
import { useState,useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
// import BlogInfo from "../../components/BlogInfo/BlogInfo";
import { HomeDiv } from "./HomeElements";
 

function Home ({search, currentUser, setSearch}) {
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
       <HomeDiv>
        {/* <Carousel featured={featured} getBlog={getBlog}/>
        <BlogInfo currentUser={currentUser} search={search} setSearch={setSearch}/> */}
        </HomeDiv>
        
    )
}

export default Home;