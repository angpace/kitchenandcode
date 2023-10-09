import React from 'react'
import Blogs from '../pages/Blogs/Blogs'
import { BlogInfoContainer } from './BlogInfoElements'
import FeaturedColumn from '../FeaturedColumn/FeaturedColumn'


const BlogInfo = ({search, currentUser}) => {
  return (
    <BlogInfoContainer>
            <Blogs search={search} currentUser={currentUser}/>
           <FeaturedColumn/>
    </BlogInfoContainer>
  )
}

export default BlogInfo