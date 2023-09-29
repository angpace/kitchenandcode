import styled from "styled-components";

export const HeaderContainer = styled.div`
/* border-top: thin solid; */
border-bottom: thin solid;
/* background-color: #333333; */
/* color: #fffef2; */
/* margin-top: 26px; */
padding: 2%;
display: flex;
max-height: 680px;
overflow: hidden;

`
export const ImageContainer = styled.div`
width: 50%;
/* max-height: 90%; */
`
export const HeaderImage = styled.img`
max-width: 100%;
max-height: 1000px;
/* padding: 2%; */

`

export const HeaderContent = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`
export const HeaderQuote = styled.h3`

@media screen and (max-width: 400px) {
    font-size: 16px;
}
`

export const HeaderAuthor = styled.em`
@media screen and (max-width: 400px) {
    font-size: 12px;
}
`