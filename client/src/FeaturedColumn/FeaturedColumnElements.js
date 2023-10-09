import styled from "styled-components";


export const Fixed = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 33%;
 /* position: sticky;
  top: 0; */

  @media screen and (max-width: 600px){
    width: 100%;
  }
`

export const Box = styled.div`
height: 49%;
border-radius: 20px;
background-color: #FAF9F6;
`