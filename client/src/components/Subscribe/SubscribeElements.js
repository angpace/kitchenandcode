import styled from "styled-components";


export const SubscribeContainer = styled.div`
width: 100%;
border-top: thin solid;
display: flex;
padding: 7%;
background-color: #fffef2;

`

export const FormContainer = styled.form`
display: flex;
width: 90%;


@media screen and (max-width: 700px){
    flex-direction: column;
    width: 70%;
    padding: 10%;
    gap: 10px;
}
`

export const SubscribeButton = styled.button`
border: none; 
font-size: 20px;

@media screen and (max-width: 750px){
    font-size: 12px;
}
`