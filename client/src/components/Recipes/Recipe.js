import React from 'react'
import { MiniTitle, RecipeImage, RecipeContainer, RecipeImageContainer, RecipeTitle, RecipeInformation, RecipeDetails } from './RecipeElements'

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
        <RecipeImageContainer>
            <RecipeImage src={recipe.photo}/>
            <RecipeTitle>{recipe.title}</RecipeTitle>
        </RecipeImageContainer> {
            recipe.servings === 0 ?
            <></>
            :
            <RecipeInformation>
            <RecipeDetails>Prep time: {recipe.time}</RecipeDetails>
            <RecipeDetails>Servings: {recipe.servings}</RecipeDetails>
            </RecipeInformation>
        }
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