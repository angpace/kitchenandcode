import styled from "styled-components";


export const BlogInfoContainer = styled.div`
display: flex;
height: 125vh;
max-width: 85%;
margin: auto;
justify-content: space-around;
padding: 2%;
gap: 3%;

@media screen and (max-width: 600px){
    flex-direction: column;
    height: 300vh;
   /* gap: 10px; */
}
`