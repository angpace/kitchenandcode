import styled from "styled-components";

export const  ContactMeContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 10%;
background-color: #fffef2;

@media screen and (max-width: 400px){
    padding: 7% 0% 7% 0%
}
`

export const ContactMeHeading = styled.h3`
font-weight: 600px;
`

export const FormContainer = styled.div`
max-width: 500px;
width: 60%;

@media screen and (max-width: 300px){
    padding: 5px;
    width: 90%
}

`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;


`