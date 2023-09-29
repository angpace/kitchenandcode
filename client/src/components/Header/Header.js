import React from 'react'
import { HeaderContainer, HeaderContent, HeaderQuote, HeaderAuthor, HeaderImage, ImageContainer } from './HeaderElements'

const Header = () => {
  return (
    <HeaderContainer>
      <ImageContainer>
      <HeaderImage src="https://images.pexels.com/photos/7703737/pexels-photo-7703737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      </ImageContainer>
        <HeaderContent>
            <HeaderQuote>Welcome to Kitchen and Code</HeaderQuote>
            <HeaderAuthor>Nothing brings people together like hospitalitity and technology</HeaderAuthor>
        </HeaderContent>
    </HeaderContainer>
  )
}

export default Header