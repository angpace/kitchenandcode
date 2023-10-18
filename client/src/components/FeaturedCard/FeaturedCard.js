import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardTitle, CardText } from './FeaturedCardElements'

const FeaturedCard = ({b}) => {
  const nav = useNavigate()

  let handleClick = () => {
      nav(`/${b.id}`)
  }

  return (
    <Card onClick={handleClick}>
        <CardText><strong>{b.title}</strong> <br/>{b.preview}</CardText>
    </Card>
  )
}

export default FeaturedCard