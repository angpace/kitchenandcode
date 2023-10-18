import React from 'react'
import Blogs from '../../pages/Blogs/Blogs'
import { BlogInfoContainer } from './BlogInfoElements'
import FeaturedColumn from '../FeaturedColumn/FeaturedColumn'
import { useState, useEffect } from 'react'


const BlogInfo = ({search, currentUser}) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch(`/blogs`)
    .then(res => res.json())
    .then(data => setBlogs(data))
}, [])

  return (
    <BlogInfoContainer>
           <FeaturedColumn blogs={blogs}/>
           <Blogs search={search} currentUser={currentUser} blogs={blogs} setBlogs={setBlogs}/>
    </BlogInfoContainer>
  )
}

export default BlogInfo