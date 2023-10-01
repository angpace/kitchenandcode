import styled from "styled-components";

export const CarouselWrapper = styled.div`
width: 95%;
padding: 3%;
margin: auto

`
export const Item = styled.div`
max-height: 250px;
display: flex;
align-items: center;
justify-content: center;

`

export const Image = styled.img`
max-width: 99%;
&:hover{
 cursor: pointer;
}
`

export const CarouselHeading = styled.h2`
padding: 3% 0% 3% 2%;
text-align: center;
font-weight: 850px;
background-color: #fffef2;

@media screen and (max-width: 400px){
    padding: 9% 0% 3% 2%
}
`