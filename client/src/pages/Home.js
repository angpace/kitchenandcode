import Bloglead from "../components/BlogLead/Bloglead";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import { useState,useEffect } from "react";
 

function Home () {
    // const FadeUp = batch(Fade(), Sticky());
  

    return (
       <div>
            <Header/>
            <Carousel/>   
            <Bloglead/>  
        </div>
        
    )
}

export default Home;