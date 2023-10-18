import styled from "styled-components";

export const Container = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19);background-color: white;
border: thin solid;
border-color: rgba(233,188,68,0.9808517156862745);
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
export const CardTitle = styled.h3`
font-weight: 200;

@media screen and (max-width: 400px){
   font-weight: 300px;
   font-size: 18px;
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
font-size: 15px;
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
  /* border: thin solid; */

  @media screen and (max-width: 500px){
    width: 90%;
   
}
`