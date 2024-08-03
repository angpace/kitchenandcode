import styled from "styled-components";

export const  ContactMeContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 3%;

@media screen and (max-width: 550px){
    // padding: 7% 0% 7% 0%;
    margin-top: 30px;
}
`

export const ContactMeContent = styled.div`
width: 60%;
display: flex;
flex-direction: column;

@media screen and (max-width: 550px){
    width: 100%
}
`

export const ContactMeHeading = styled.h1`
font-weight: bold;
float: left;
`

export const FormContainer = styled.div`
max-width: 600px
`
export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 5px;

`

export const SendButton = styled.button`
max-width: 20%;
border: none;
background-color: black;
color: white;
`