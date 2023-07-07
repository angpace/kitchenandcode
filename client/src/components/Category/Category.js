import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from '../BlogCard/BlogCard'
import { BlogContainer} from "./CategoryElements.js"
import { CarouselHeading } from '../Carousel/CarouselElements'

const Category = () => {
    const params = useParams()
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch(`blogs/${params.id}`)
        .then(res => res.json())
        .then(blogs => setBlogs(blogs))
    }, [])
    const mapBlogs = blogs.map((b) => <BlogCard b={b} key={b.id}/>)

    console.log(blogs)
  return (
    <BlogContainer>
    <CarouselHeading>Blogs about {params.id}</CarouselHeading>
        {mapBlogs}
    </BlogContainer>
  )
}

export default Category