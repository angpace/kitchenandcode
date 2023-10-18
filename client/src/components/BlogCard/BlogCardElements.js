import styled from "styled-components";

export const Container = styled.div`
background-image: linear-gradient(150deg, #DCDCDC 5%, #f5f5f7 100%, #DCDCDC 100%);
/* background-color: #f5f5f7; */
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
   font-size: 20px;
}

`
export const TitleandDate= styled.div`
display: flex;
justify-content: space-between;
padding-top: 1%;

@media screen and (max-width: 600px){
    flex-direction: column;
    padding-left: 4%;
    font-size: 14px;
}

`
export const CardDate = styled.p`
@media screen and (max-width: 600px){
    font-size: 13px;
}

`
export const CardPreview = styled.p`

@media screen and (max-width: 600px){
   padding-left: 4%;
   padding-right: 2%;
   font-size: 13px;
}
`
export const CardLikes = styled.p`
color: gray; 
font-size: 10px;
padding-bottom: 3%;
/* font-style: italic; */
@media screen and (max-width: 600px){
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