import styled from "styled-components";


export const Fixed = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 33%;
height: 90vh;


  @media screen and (max-width: 700px){
    width: 100%;
    min-height: 600px;
    gap: 2%;
  }
`

export const Box = styled.div`
display: flex;
flex-direction: column;
gap: 2%;
height: 49%;
/* border: thin solid;
border-color: rgba(233,188,68,0.6895351890756303);
border-radius: 20px; */
padding-left: 2%;
padding-right: 2%;


`

export const BoxHeading = styled.h3`
padding-top: 4%;
padding-left: 2%;
padding-bottom: 1%;
`