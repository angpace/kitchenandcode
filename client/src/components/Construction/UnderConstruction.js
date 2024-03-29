import React from 'react'
import { ConstructionPage, ContentContainer, Content } from './UnderCElements'


const UnderConstruction = () => {
  return (
    <ConstructionPage>
        <ContentContainer>
          <Content>Hello, there. Thanks for visiting Kitchen and Code! <br/>
          <br/>
           The site is currently under construction. In the meantime, feel free to visit 
            my <a href='https://angelapace.tech/'>Portfolio</a>.</Content>
        </ContentContainer>
          
        {/* <ImageContainer>
          <Image src={img}></Image>
        </ImageContainer> */}
        </ConstructionPage>
  )
}

export default UnderConstruction