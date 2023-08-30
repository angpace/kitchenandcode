import styled from "styled-components";

export const Search = styled.input`
border-style: none;
`
export const HeadingContainer = styled.div``

export const KeyWordContainer = styled.div`
display: flex;
justify-content: center;
padding: 3%;
gap: 10px;

@media screen and (max-width: 400px){
    flex-direction: column;
    align-items: center
}
`

export const KeywordFlex = styled.div`
display: flex;
gap: 10px;
`

export const Keywords = styled.button`
font-size: 12px;
border-style: none;
`

export const WelcomeText = styled.p`
margin: auto;
`
