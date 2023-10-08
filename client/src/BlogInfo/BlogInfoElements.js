import styled from "styled-components";


export const BlogInfoContainer = styled.div`
display: flex;
max-width: 85%;
margin: auto;
justify-content: space-around;

@media screen and (max-width: 600px){
    flex-direction: column;
   /* gap: 10px; */
}
`