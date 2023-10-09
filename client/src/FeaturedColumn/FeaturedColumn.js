import React from 'react'
import { Fixed, Box, Card} from './FeaturedColumnElements'

const FeaturedColumn = () => {
  return (
    <Fixed>
        <Box>
          <h3>Most Recent</h3>
            <Card>ehsotahegoiehga fkljfs ksjf</Card> 
            <Card>ehsotahegoiehga fkljfs ksjf</Card>
            <Card>ehsotahegoiehga fkljfs ksjf</Card>   
        </Box>
        <Box>
        <h3>Most Liked</h3>
            <Card>ehsotahegoiehga fkljfs ksjf</Card>
            <Card>ehsotahegoiehga fkljfs ksjf</Card>
            <Card>ehsotahegoiehga fkljfs ksjf</Card>
        </Box>
    </Fixed>
  )
}

export default FeaturedColumn