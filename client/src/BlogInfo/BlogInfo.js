import React from 'react'
import Blogs from '../pages/Blogs/Blogs'
import { BlogInfoContainer } from './BlogInfoElements'


const BlogInfo = ({search, currentUser}) => {
  return (
    <BlogInfoContainer>
            <Blogs search={search} currentUser={currentUser}/>
            <div style={{width: "40%"}}>
              <h2>
               hello
              </h2>
               </div>
    </BlogInfoContainer>
  )
}

export default BlogInfo