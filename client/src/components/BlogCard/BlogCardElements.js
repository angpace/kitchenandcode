import styled from "styled-components";

export const Container = styled.div`
background-color: #FAF9F6;
border-radius: 20px;

&:hover{
    cursor: pointer;
}

`

export const BlogCardContainer = styled.div`
max-width: 90%;
margin: auto;

@media screen and (max-width: 500px){
    max-width: 100%;
}
`
export const CardTitle = styled.h2`
font-weight: 400;

@media screen and (max-width: 400px){
   font-weight: 200px;
}

`
export const TitleandDate= styled.div`
display: flex;
justify-content: space-between;
padding-top: 1%;

@media screen and (max-width: 400px){
    flex-direction: column;
    padding-left: 2%
}

`
export const CardDate = styled.p`
@media screen and (max-width: 400px){
    font-size: 13px;
}

`
export const CardPreview = styled.p`

@media screen and (max-width: 400px){
   padding-left: 2%
}
`
export const CardLikes = styled.p`
color: gray; 
font-size: 12px;
padding-bottom: 2%;
/* font-style: italic; */
@media screen and (max-width: 400px){
   padding-left: 3%
}
`

export const ImgContainer = styled.div`
padding-top: 4%;
overflow: hidden;
max-height: 250px;
display: flex;
    justify-content: center;
`

export const CardImage = styled.img`
  width: 100%; /* Make the image 90% of the container's width */
  max-height: 350px; /* Set the maximum height of the image */
  object-fit: cover;
  border-radius: 20px;

  @media screen and (max-width: 500px){
    width: 90%;
   
}
`