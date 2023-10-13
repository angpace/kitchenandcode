import React from 'react'
import { Card, CardTitle, CardText } from './FeaturedCardElements'

const FeaturedCard = ({b}) => {
  return (
    <Card>
        <CardTitle>{b.title}</CardTitle>
        <CardText>{b.preview}</CardText>
    </Card>
  )
}

export default FeaturedCard