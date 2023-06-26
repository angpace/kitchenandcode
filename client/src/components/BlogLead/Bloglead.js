import React from 'react'
import { BlogLeadContainer, BlogCategory, Image, BlogCategoryContent } from './BlogleadElements'
import { CarouselHeading } from '../Carousel/CarouselElements'

const Bloglead = () => {
  return (
    <>
    <CarouselHeading>Read More</CarouselHeading>
    <BlogLeadContainer>
        <BlogCategory onClick={(e) => console.log(e.target.alt)}>
            <Image src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_640.jpg" alt="tech"/>
            <BlogCategoryContent>TECH</BlogCategoryContent>
        </BlogCategory>
        <BlogCategory onClick={(e) => console.log(e.target.alt)}> 
            <Image src="https://www.thespruceeats.com/thmb/5f1AUqYbY4CsjHSeqvDUau7OjaQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg" alt="food"/>
            <BlogCategoryContent>FOOD</BlogCategoryContent>
        </BlogCategory>
    </BlogLeadContainer>
    </>
  )
}

export default Bloglead