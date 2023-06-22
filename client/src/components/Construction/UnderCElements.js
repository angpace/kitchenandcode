import styled from 'styled-components';

export const ConstructionPage = styled.div`
   background-color: whitesmoke;
   display: flex;
   max-height: 720px;
   width: 100%;
   overflow: hidden;

   @media screen and (max-width: 768px){
    flex-direction: column;
}
`

export const ContentContainer = styled.div`
width: 50%;
height: 50%;
align-items: center;

@media screen and (max-width: 768px){
    width: 100%;
}
`

export const Content = styled.h1`
background-color: whitesmoke;
font-size: 30px;
color: black;
padding: 10%;

@media screen and (max-width: 768px){
    font-size: 20px;
}
`
export const ImageContainer = styled.div`
left: 45%;
width: 50%;
overflow: hidden;

@media screen and (max-width: 768px){
    width: 100%;
}
`
export const Image = styled.img`
width: 100%;

`
