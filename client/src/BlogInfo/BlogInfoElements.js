import styled from "styled-components";


export const BlogInfoContainer = styled.div`
display: flex;
height: 100vh;
max-width: 85%;
margin: auto;
justify-content: space-around;
padding: 2%;
gap: 3%;

@media screen and (max-width: 600px){
    flex-direction: column;
   /* gap: 10px; */
}
`