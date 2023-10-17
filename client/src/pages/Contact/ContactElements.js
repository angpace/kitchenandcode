import styled from "styled-components";

export const  ContactMeContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
/* align-items: center; */
padding: 3%;

@media screen and (max-width: 400px){
    padding: 7% 0% 7% 0%;
    margin-top: 30px;
}
`

export const ContactMeHeading = styled.h1`
font-weight: 600px;
`

export const FormContainer = styled.div`
max-width: 500px;
width: 60%;

@media screen and (max-width: 500px){
    width: 100%;
    padding: 5px;
   
}

`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;


`