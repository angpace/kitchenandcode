import styled from "styled-components";

export const Container = styled.div`
margin-left:10%;

&:hover{
    cursor: pointer;
}

@media screen and (max-width: 400px){
    margin-left:0%;
    padding-top: 5%;
}

`

export const BlogCardContainer = styled.div`
max-width: 90%;
/* border-bottom: thin solid; */
border-top: thin solid;
padding: 10px;
background-color: "#fffef2";


@media screen and (max-width: 400px){
    max-width: 100%;
    padding: 5px;
}
`
export const CardTitle = styled.h3`
font-weight: 600;
float: left;

@media screen and (max-width: 400px){
    padding-bottom: 15%;
}

`
export const CardDate = styled.p`
float: right;
`
export const CardPreview = styled.p`
padding-top: 10%;
@media screen and (max-width: 400px){
    padding-top: 15%;
}
`
export const CardLikes = styled.p`
color: gray; 
font-size: 12px;
/* font-style: italic; */
`