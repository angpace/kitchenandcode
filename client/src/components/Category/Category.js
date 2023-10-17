import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from "../../components/BlogCard/BlogCard";
import { CategoryPage, CardHolder } from './CategoryElements';

const Category = () => {
    const params = useParams()
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
      fetch('/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
    }, [])
    
   let categorized = blogs.filter((b) => b.category === params.id)

   let cards = categorized.map((b) => {
    return <BlogCard b={b}/> })

    if(params.id === "tech"){
        return (
            <CategoryPage>
            <h1>Blogs about Technology</h1>
              <CardHolder>
                {cards}
                </CardHolder>
            </CategoryPage>
            )
    }
  return (
    <CategoryPage>
        <h1>Blogs about Food</h1>
          <CardHolder>
          {cards}
          </CardHolder>
    </CategoryPage>
  )
}

export default Category