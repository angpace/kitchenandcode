import React from 'react'
import { Content, } from '../Construction/UnderCElements'
import { MiniTitle, RecipeImage } from './RecipeElements'

const Recipe = ({recipe}) => {

    if (recipe.length < 1){
        return <h1>LOADING</h1>
    }
    let ingredients = recipe.ingredients.map((i) => {
        return <li>{i}</li>
    })

    let method = recipe.method.map((m) => {
        return <p>{m}</p>
    })
  return (
    <div>
        <Content>{recipe.title}</Content>
            <RecipeImage src={recipe.photo}/>
        <MiniTitle>Ingredients</MiniTitle>
        <ul>
            {ingredients}
        </ul>
        <MiniTitle>Method</MiniTitle>
        {method}
    </div>
  )
}

export default Recipe