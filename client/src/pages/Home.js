import { useNavigate } from "react-router-dom";
import Bloglead from "../components/BlogLead/Bloglead";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import { useState,useEffect } from "react";
 

function Home () {
    // const FadeUp = batch(Fade(), Sticky());
    const navigate = useNavigate()
    const [featuredPosts, setFeaturedPosts] = useState([])

  useEffect(() => {
    fetch("/blogs")
    .then(res => res.json())
    .then(data => setFeaturedPosts(data))
  }, [])

  function getBlog(id){
    if (id){
        console.log(id)
        navigate(`/${id}`)
    }
  }

    return (
       <div>
            <Header/>
            <Carousel featuredPosts={featuredPosts} getBlog={getBlog}/>   
            <Bloglead/>  
        </div>
        
    )
}

export default Home;