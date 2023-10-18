import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 20px; 
  /* max-height: 85px; */
  display: flex;
  flex-direction: column;
  background-color: white;
  border: solid;
border-color: rgba(233,188,68,0.6895351890756303);
border-radius: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19);
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