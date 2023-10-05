import React from 'react'
import Blogs from '../pages/Blogs/Blogs'
import { BlogInfoContainer } from './BlogInfoElements'


const BlogInfo = ({search, currentUser}) => {
  return (
    <BlogInfoContainer>
            <Blogs search={search} currentUser={currentUser}/>
            <h1> hello</h1>
    </BlogInfoContainer>
  )
}

export default BlogInfo