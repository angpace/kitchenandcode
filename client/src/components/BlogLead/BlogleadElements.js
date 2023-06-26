import styled from "styled-components";

export const BlogLeadContainer = styled.div`
display: flex;
justify-content: center;
justify-content: space-around;
padding: 7%;

@media screen and (max-width: 400px){
    flex-direction: column;
    align-items: center;
    padding: 2%;
}
`

export const BlogCategory = styled.div`
width: 40%;
max-width: 1000px;

@media screen and (max-width: 400px){
    width: 70%;
    padding: 4%;
}

`
export const Image = styled.img`
width: 100%;
border-radius: 3px;

&:hover{
    opacity: .7;
    border-radius: 10px;
}
`

export const BlogCategoryContent = styled.h3`
  background: rgba(20%, 20%, 20%, .10);

  /* center overlay text */
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 2%;
`