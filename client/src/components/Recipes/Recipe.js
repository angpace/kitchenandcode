import React from 'react'
import { Content, } from '../Construction/UnderCElements'
import { MiniTitle, RecipeImage, RecipeContainer, RecipeImageContainer } from './RecipeElements'

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
        <RecipeImageContainer>
            <RecipeImage src={recipe.photo}/>
        </RecipeImageContainer>
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