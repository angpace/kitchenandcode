import styled from "styled-components";

export const RecipeContainer = styled.div`
padding-top: 10%;

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
padding: 5%;
`

export const RecipeImage = styled.img`
height: 200px;
width: 200px;
border-radius: 50%
`
export const RecipeTitle = styled.p`
font-size: 22px;


`