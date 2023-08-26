import styled from "styled-components";

// export const SearchContainer = styled.div`
// position: absolute;
// `

export const Search = styled.input`
border-style: none;
/* background-color: #fffef2; */
/* width: 10%; */
`
export const HeadingContainer = styled.div`

/* @media screen and (max-width: 500px){
    padding-top: 5%;
} */
`

export const KeyWordContainer = styled.div`
display: flex;
justify-content: center;
padding: 3%;
gap: 10px;

@media screen and (max-width: 400px){
    flex-direction: column;
    /* max-width: 50%; */
    align-items: center
}
`

export const KeywordFlex = styled.div`
display: flex;
gap: 10px;
`

export const Keywords = styled.button`
font-size: 12px;
/* background-color: lightgray; */
border-style: none;
`

export const WelcomeText = styled.p`
margin: auto;
`
