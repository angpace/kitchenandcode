import styled from "styled-components";

export const HeaderContainer = styled.div`
border-top: thin solid;
border-bottom: thin solid;
padding: 10%;
background-color: #faf0e6;
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