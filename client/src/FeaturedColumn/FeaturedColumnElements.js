import styled from "styled-components";


export const Fixed = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 33%;
max-height: 650px;
 /* position: sticky;
  top: 0; */

  @media screen and (max-width: 600px){
    width: 100%;
    height: 100%;
    gap: 5%;
  }
`

export const Box = styled.div`
display: flex;
flex-direction: column;
gap: 4%;
height: 49%;
border-radius: 15px;
background-color: #f5f5f7;
/* padding: 1%; */
padding-left: 2%;
padding-right: 2%;
contain: content;
`
// export const Card = styled.p`
// height: 20%;
// background-color: white;
// padding: 1%;
// border-radius: 20px;
// `