import React from 'react'

const Recipe = ({recipe}) => {

    let ingredients = recipe.ingredients.map((i) => {
        return <li>{i}</li>
    })

    let method = recipe.method.map((m) => {
        return <p>{m}</p>
    })
  return (
    <div>
        <h1>{recipe.title}</h1>
        <ul>
            {ingredients}
        </ul>
        {method}
        </div>
  )
}

export default Recipe