import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 20px; 
  /* max-height: 85px; */
  display: flex;
  flex-direction: column;
  background-color: white;
  /* border: thin solid;
  border-color: rgba(233,188,68,0.9808517156862745); */
border-radius: 20px;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19);
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