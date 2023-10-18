import styled from "styled-components";

export const CategoryPage = styled.div`
width: 80%;
margin: auto;
margin-top: 40px;
padding-bottom: 5%;

@media screen and (max-width: 600px){
    width: 100%;
}
`

export const CategoryHeading = styled.h1`
padding-top: 5%;

@media screen and (max-width: 600px){
    padding-left: 5%;
}
`

export const CardHolder = styled.div`
display: flex;
flex-direction: column;
padding-top: 20px;
width:60%;
gap: 10px;

@media screen and (max-width: 700px){
    margin: auto;
    width: 90%;
}

`