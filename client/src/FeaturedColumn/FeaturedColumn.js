import React from 'react'
import { useState, useEffect } from 'react'
import { Fixed, Box } from './FeaturedColumnElements'
import FeaturedCard from '../components/FeaturedCard/FeaturedCard'

const FeaturedColumn = ({blogs}) => {
  const [mostLiked, setMostLiked] = useState([])

    useEffect(() => {
      fetch(`/mostliked`)
      .then(res => res.json())
      .then(data => setMostLiked(data))
  }, [])

  const likedCard = mostLiked.map((b) => {
    return ( <FeaturedCard b={b} />)
  })

  const mostRecent = blogs.slice(0,3).map((b) => {
    return ( <FeaturedCard b={b} />)
  })


  return (
    <Fixed>
        <Box>
          <h3>Most Recent</h3>  
          {mostRecent}
        </Box>
        <Box>
        <h3>Most Liked</h3>
        {likedCard}
        </Box>
    </Fixed>
  )
}

export default FeaturedColumn