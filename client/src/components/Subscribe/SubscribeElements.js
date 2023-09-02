import styled from "styled-components";


export const SubscribeContainer = styled.div`
width: 100%;
border-top: thin solid;
display: flex;
flex-direction: column;
padding: 7%;
background-color: #fffef2;
`

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
width: 90%;


@media screen and (max-width: 700px){
    flex-direction: row;
}
`

export const Form = styled.form`
display: flex;

@media screen and (max-width: 700px){
    flex-direction: column;
    width: 80%;
    gap: 2px;
}

`

export const SubscribeButton = styled.button`
border: none; 
font-size: 20px;

@media screen and (max-width: 750px){
    font-size: 12px;
}
`

export const LoginOnSubscirbe = styled.button`
 border-style: none;
`