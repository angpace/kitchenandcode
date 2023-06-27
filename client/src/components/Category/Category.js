import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from '../BlogCard/BlogCard'
import { BlogContainer, ContainerHeading  } from "./CategoryElements.js"
import { CarouselHeading } from '../Carousel/CarouselElements'

const Category = () => {
    const params = useParams()
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch(`/${params.id}`)
        .then(res => res.json())
        .then(blogs => setBlogs(blogs))
    }, [])

    console.log(blogs)
    console.log(params)

    const mapBlogs = blogs.map((b) => <BlogCard b={b} key={b.id}/>)
  return (
    <BlogContainer>
    <CarouselHeading>Blogs about {params.id}</CarouselHeading>
        {mapBlogs}
    </BlogContainer>
  )
}

export default Category