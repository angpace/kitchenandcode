import styled from "styled-components";

export const BlogLayContainer = styled.div`
background-color: white;
width: 100%;
margin: auto;
margin-top: 26px;
`

export const FeatureContain = styled.div`
width: 100%;
overflow: hidden;
max-height: 300px;

`

export const Feature = styled.img`
  width: 100%; /* Make the image 90% of the container's width */
  /* max-height: 350px; Set the maximum height of the image */
  object-fit: cover;
  /* border-radius: 15px; */
`
export const BlogContent = styled.div`
margin: auto;
width: 80%;
max-width: 900px;

@media screen and (max-width: 600px) {
    width: 95%
}
`

export const BlogTitle = styled.h1`
font-size: 60px;
padding-top: 5%;
padding-bottom: 3%;

@media screen and (max-width: 600px) {
   font-size: 40px;
}
`
export const SecondImgContainer = styled.div`
display: flex;
justify-content: center;
overflow: hidden;
max-height: 300px;
`
export const SecondImage = styled.img`
width: 85%;
padding: 2%;
object-fit: cover;

`

export const ButtonContainer = styled.div`
padding-bottom: 10%;

@media screen and (max-width: 440px){
    padding-bottom: 15%;  
}
`

export const JumpToRecipe = styled.button`
float: right;
`


