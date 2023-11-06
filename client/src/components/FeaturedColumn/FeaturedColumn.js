import React from 'react'
import { useState, useEffect } from 'react'
import { Fixed, Box, BoxHeading } from './FeaturedColumnElements'
import FeaturedCard from '../FeaturedCard/FeaturedCard'

const FeaturedColumn = ({blogs}) => {
  const [mostLiked, setMostLiked] = useState([])

    useEffect(() => {
      fetch(`/mostliked`)
      .then(res => res.json())
      .then(data => setMostLiked(data))
  }, [])

  const likedCard = mostLiked.map((b) => {
    return ( <FeaturedCard b={b} key={b.id}/>)
  })

  const mostRecent = blogs.slice(0,3).map((b) => {
    return ( <FeaturedCard b={b} key={b.id} />)
  })


  return (
    <Fixed>
        <Box>
          <BoxHeading>Most Recent Blogs</BoxHeading>  
          {mostRecent}
        </Box>
        <Box>
        <BoxHeading>Most Liked Blogs</BoxHeading>
        {likedCard}
        </Box>
    </Fixed>
  )
}

export default FeaturedColumn