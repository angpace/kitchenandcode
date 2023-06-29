import styled from "styled-components";

export const Container = styled.div`
margin-left:10%;

&:hover{
    cursor: pointer;
}

`

export const BlogCardContainer = styled.div`
max-width: 90%;
/* border-bottom: thin solid; */
border-top: thin solid;
padding: 10px;
background-color: "#fffef2";

@media screen and (max-width: 400px){
    max-width: 100%
}
`
export const CardTitle = styled.h3`
font-weight: 600;
float: left;
`
export const CardDate = styled.p`
float: right;
`
export const CardPreview = styled.p`
padding-top: 6%;
`
export const CardLikes = styled.p`
color: gray; 
font-style: italic;
`