import React from 'react'
import { Content, } from '../Construction/UnderCElements'
import { MiniTitle, RecipeImage, RecipeContainer } from './RecipeElements'

const Recipe = ({recipe}) => {

    if (recipe.length < 1){
        return <h1>LOADING</h1>
    }
    let ingredients = recipe.ingredients.map((i) => {
        return <li key={i}>{i}</li>
    })

    let method = recipe.method.map((m) => {
        return <p key={m}>{m}</p>
    })
  return (
    <RecipeContainer>
        <Content>{recipe.title}</Content>
            <RecipeImage src={recipe.photo}/>
        <MiniTitle>Ingredients</MiniTitle>
        <ul>
            {ingredients}
        </ul>
        <MiniTitle>Method</MiniTitle>
        {method}
    </RecipeContainer>
  )
}

export default Recipe