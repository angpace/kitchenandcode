import styled from "styled-components";

export const CarouselWrapper = styled.div`
height: 500px;
width: 100%;
overflow: hidden;
background-color: #faf0e6
`
export const Item = styled.div`
height: 100%;
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
padding: 1%;
border-bottom: thin solid;

`