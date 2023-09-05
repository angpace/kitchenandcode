import styled from "styled-components";


export const SubscribeContainer = styled.div`
width: 100%;
border-top: thin solid;
display: flex;
flex-direction: column;
padding: 3%;
background-color: #fffef2;

@media screen and (max-width: 700px){
    padding: 3%;
}
`

export const FormContainer = styled.form`
display: flex;
padding-top: 1%;
padding-bottom: 1%;
flex-direction: column;


@media screen and (max-width: 800px){
    flex-direction: row;
    align-self: center;
    padding-bottom: 2%;
}
`

export const Form = styled.form`
display: flex;
gap: 2px;

@media screen and (max-width: 800px){
    width: 100%;  
    flex-direction: column;
    
}
`

export const SubscribeButton = styled.button`
border: none; 
font-size: 15px;

@media screen and (max-width: 750px){
    font-size: 12px;
}
`

export const LoginOnSubscirbe = styled.button`
 border-style: none;
`