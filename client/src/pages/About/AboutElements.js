import styled from "styled-components";

export const AboutContainer = styled.div`
background-color: #fffef2;
padding: 10%;
display: flex;
justify-content: space-between;
max-height: 650px;
max-width: 1600px;
align-items: center;

@media screen and (max-width: 400px) {
    flex-direction: column;
    max-height: 100%;
}
`

export const Image = styled.img`
width: 40%;
max-width: 400px;
/* height: 40% */

@media screen and (max-width: 400px) {
   width: 100%
}
`
export const AboutMeContent = styled.div`
width: 50%;
float: right;

@media screen and (max-width: 400px) {
   width: 100%
}
`
export const Content = styled.div`
display: flex;
flex-direction: column;
`
export const Title = styled.h3`
font-weight: 600px
`
export const Body = styled.p`
`