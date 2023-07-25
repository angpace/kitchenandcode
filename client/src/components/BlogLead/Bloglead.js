import React from 'react'
import { BlogLeadContainer, BlogCategory, Image, BlogCategoryContent } from './BlogleadElements'
import { CarouselHeading } from '../Carousel/CarouselElements'
import { useNavigate } from 'react-router-dom'


const Bloglead = () => {
    const nav = useNavigate()

    function bringToBlogs (e){
        e.preventDefault()
        if(e.target.alt){
            nav(`/blogs/${e.target.alt}`)
        }
    }
  return (
    <div style={{backgroundColor: "#fffef2"}}>
    <CarouselHeading>Read More</CarouselHeading>
    <BlogLeadContainer>
        <BlogCategory onClick={(e) => bringToBlogs(e)}>
            <Image src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_640.jpg" alt="tech"/>
            <BlogCategoryContent>Tech</BlogCategoryContent>
        </BlogCategory>
        <BlogCategory onClick={(e) => bringToBlogs(e)}> 
            <Image src="https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="food"/>
            <BlogCategoryContent>Food</BlogCategoryContent>
        </BlogCategory>
    </BlogLeadContainer>
    </div>
  )
}

export default Bloglead