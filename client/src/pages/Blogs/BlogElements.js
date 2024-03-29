import styled from "styled-components";

export const BlogContainer = styled.div`
/* max-width: 100%; */
display: flex;
flex-direction: column;
gap: 20px;
width: 65%;
overflow-y: scroll;
padding-left: 2%; padding-right: 2%; padding-bottom: 2%;



@media screen and (max-width: 700px){
    width: 100%;
}
`

export const BlogHeading = styled.div`
display: flex;
justify-content: space-between;
position: sticky;
padding: 1%;
`
export const Icons = styled.div`
display: flex;
gap: 8px;
`
export const Icon = styled.img`
border: thin solid;
padding: 1%;
border-radius: 50%;
:hover{
    cursor: pointer;
}
`