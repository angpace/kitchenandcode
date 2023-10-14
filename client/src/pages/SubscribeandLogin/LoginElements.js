import styled from "styled-components";


export const  LoginContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 10%;
min-height: 450px;

@media screen and (max-width: 500px){
    padding: 7% 0% 7% 0%;
    margin-top: 30px;
    min-height: 320px;
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
