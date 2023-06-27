import styled from "styled-components";

export const BlogLeadContainer = styled.div`
display: flex;
justify-content: center;
justify-content: space-around;
padding: 7%;
background-color: #fffef2;

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
border-radius: 1px;

&:hover{
    opacity: .7;
}
`

export const BlogCategoryContent = styled.h3`
  background: #333333;
  color: whitesmoke;

  /* center overlay text */
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1%;
`