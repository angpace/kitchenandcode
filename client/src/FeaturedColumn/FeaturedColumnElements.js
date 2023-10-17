import styled from "styled-components";


export const Fixed = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 33%;
max-height: 700px;
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
gap: 2%;
height: 49%;
border-radius: 15px;
background-image: linear-gradient(150deg, #DCDCDC 5%, #DCDCDC 0%, #DCDCDC 100%);
/* background-color: rgba(232, 232, 237, 0.95); */
/* padding: 1%; */
padding-left: 2%;
padding-right: 2%;
contain: content;

`

export const BoxHeading = styled.h3`
padding-top: 4%;
padding-left: 2%;
padding-bottom: 1%;
`