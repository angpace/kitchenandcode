import styled from "styled-components";


export const  LoginContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 10%;
background-color: #fffef2;

@media screen and (max-width: 400px){
    padding: 5%
}
` 
export const Contain = styled.div`
width: 40%;
max-width: 275px;

@media screen and (max-width: 300px){
    padding: 5px;
    width: 100%
}

`
