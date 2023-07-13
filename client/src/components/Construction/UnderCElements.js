import styled from 'styled-components';

export const ConstructionPage = styled.div`
   background-color: whitesmoke;
   display: flex;
   max-height: 650px;
   /* overflow-y: scroll; */
   width: 100%;
   background-color: #fffef2;
   /* border-top: thin solid; */

   @media screen and (max-width: 900px){
    flex-direction: column;
    max-height: 100%;
    padding: 2px;
    margin-top: 30px;
}
`

export const ContentContainer = styled.div`
width: 55%;
max-height: 650px;
   overflow-y: scroll;
align-items: center;
/* ::-webkit-scrollbar{
    width: 20px;
} */
/* padding-bottom: 2px; */


@media screen and (max-width: 900px){
    width: 97%;
}
`

export const Content = styled.h1`
background-color: #fffef2;
font-size: 30px;
color: black;
padding: 7% 0% 0% 4%;


`
export const ImageContainer = styled.div`
left: 40%;
width: 40%;
overflow: hidden;
border-right: thin solid;

@media screen and (max-width: 900px){
    width: 100%;
    height: 00px;
    visibility: hidden;
}
`
export const Image = styled.img`
width: 100%;
min-height: 100%;

@media screen and (max-width: 900px){
    height: 600px;
}

`
