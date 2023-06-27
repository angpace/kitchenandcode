import styled from "styled-components";

export const CarouselWrapper = styled.div`
height: 30%;
width: 100%;
overflow: hidden;
background-color: #fffef2;
border-bottom: thin solid;

`
export const Item = styled.div`
height: 550px;
display: flex;
align-items: center;
justify-content: center;

`

export const Image = styled.img`
max-height: 100%;
max-width: 100%;
object-fit: contain;

&:hover{
 cursor: pointer;
}
`

export const CarouselHeading = styled.h2`
padding: 3% 0% 3% 2%;
text-align: center;
background-color: #fffef2;

@media screen and (max-width: 400px){
    padding: 9% 0% 3% 2%
}
`