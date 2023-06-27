import { Link as LinkS } from "react-router-dom";
import styled from "styled-components";

export const FooterFlex = styled.div`
max-height: 200px;
border-top: thin solid;
/* max-width: 1100px; */
`

export const FooterContent = styled.div`
padding: 5%;
display: flex;
justify-content: space-around;
background-color: #fffef2;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`
export const FooterTitle = styled.p`
font-weight: 600;
padding-top: 10px;
color: #333333;
`

export const FooterLinks = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Link = styled(LinkS)`
text-decoration: none;
color: #333333;

&:hover{
    color: gray;
    transition: 0.3s ease-out
}
`
export const SocialMediaWrap = styled.div`
display: flex;
gap: 8%;
align-items: center;
max-width: 1100px;

@media screen and (max-width: 820px){
    gap: 1%;
}
`

