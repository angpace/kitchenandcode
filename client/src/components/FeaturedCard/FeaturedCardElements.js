import styled from 'styled-components';

export const Card = styled.div`
border-radius: 20px; 
max-height: 80px;
display: flex;
flex-direction: column;
background-color: white;
padding-top: 1%;

contain: content;

:hover{
cursor: pointer;
}

`

export const CardTitle = styled.strong`
padding-left: 3%;
`

export const CardText = styled.p`
font-size: 12px;
padding-left: 3%;
`