import styled from "styled-components";

export const SearchContainer = styled.div`
position: absolute;
`

export const Search = styled.input`
border-style: none;
background-color: #fffef2
`
export const HeadingContainer = styled.div`

@media screen and (max-width: 500px){
    padding-top: 10%;
}
`

export const KeyWordContainer = styled.div`
display: flex;
width: 400px;
/* background-color: red; */
gap: 5px;
/* align-items: center; */
/* align-self: center; */
justify-content: center;
padding-bottom: 3%;
`

export const Keywords = styled.button`
font-size: 10px;
background-color: lightgray;
border-style: none;
`