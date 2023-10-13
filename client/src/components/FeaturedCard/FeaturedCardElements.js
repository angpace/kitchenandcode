import styled from 'styled-components';

export const Card = styled.div`
border-radius: 15px; 
max-height: 85px;
display: flex;
flex-direction: column;
background-color: white;
padding-top: 2%;
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
padding-right: 1%;
padding-bottom: 1%;
`