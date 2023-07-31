import styled from "styled-components";

export const RecipeContainer = styled.div`
margin-top: 10%;
padding-top: 10%;
border: thin solid;
padding: 5%;


@media screen and (max-width: 440px){
    padding-top: 15%;
}
`
export const MiniTitle = styled.h3`
padding: 2%;
`

export const RecipeImageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 7%;

/* border: thin solid; */
`

export const RecipeImage = styled.img`
height: 200px;
width: 200px;
border-radius: 50%;
`
export const RecipeTitle = styled.p`
font-size: 22px;

`

export const RecipeInformation = styled.div`
display: flex;
flex-direction: row;
height: 20px;
justify-content: center;
/* justify-content: space-around */

`
export const RecipeDetails = styled.p`
padding-right: 5%
`