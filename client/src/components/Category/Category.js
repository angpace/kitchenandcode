import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
    const params = useParams()

    if(params.id === "tech"){
        return (
            <>
            <h1>Technology</h1>
            </>
            )
    }
  return (
    <h1>Food</h1>
  )
}

export default Category