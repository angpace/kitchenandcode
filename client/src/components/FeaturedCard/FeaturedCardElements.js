import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 20px; 
  /* max-height: 85px; */
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2%;

:hover{
cursor: pointer;
}

`

export const CardText = styled.p`
    padding: 2%;
    margin: 0; /* Remove any default margins from the paragraph */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`