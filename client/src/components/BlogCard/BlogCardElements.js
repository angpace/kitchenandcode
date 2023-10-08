import styled from "styled-components";

export const Container = styled.div`
background-color: #FAF9F6;
border-radius: 20px;


&:hover{
    cursor: pointer;
}

@media screen and (max-width: 500px){
   
}

`

export const BlogCardContainer = styled.div`
max-width: 94%;


margin: auto;


@media screen and (max-width: 500px){
    max-width: 100%;
    padding: 5px;
}
`
export const CardTitle = styled.h2`
font-weight: 400;
/* float: left; */

@media screen and (max-width: 400px){
    /* padding-bottom: 0%;
    font-size: 15px; */
}

`
export const CardDate = styled.p`

`
export const CardPreview = styled.p`


@media screen and (max-width: 400px){
  
}
`
export const CardLikes = styled.p`
color: gray; 
font-size: 12px;
/* font-style: italic; */
`

export const ImgContainer = styled.div`
padding-top: 4%;
overflow: hidden;
max-height: 400px;
`

export const CardImage = styled.img`
  width: 100%; /* Make the image 90% of the container's width */
  max-height: 350px; /* Set the maximum height of the image */
  object-fit: cover;
  border-radius: 20px;
`