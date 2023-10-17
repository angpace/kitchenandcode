import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from "../../components/BlogCard/BlogCard";
import { CategoryPage, CategoryHeading, CardHolder } from './CategoryElements';

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
            <CategoryHeading>Technology Blogs</CategoryHeading>
              <CardHolder>
                {cards}
                </CardHolder>
            </CategoryPage>
            )
    }
  return (
    <CategoryPage>
        <CategoryHeading>Food Blogs</CategoryHeading>
          <CardHolder>
          {cards}
          </CardHolder>
    </CategoryPage>
  )
}

export default Category