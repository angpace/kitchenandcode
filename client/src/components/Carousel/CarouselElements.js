import styled from "styled-components";

export const CarouselWrapper = styled.div`
width: 80%;
padding: 3%;
margin: auto;
padding-top: 5%;

@media screen and (max-width: 800px){
    padding-top: 10%;
    margin-top: 26px;
}
`
export const Item = styled.div`
max-height: 250px;
display: flex;
align-items: center;
justify-content: center;


@media screen and (max-width: 800px){
    max-height: 200px;
}

@media screen and (max-width: 370px){
    max-height: 270px;
    padding-top: 10%;
}
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