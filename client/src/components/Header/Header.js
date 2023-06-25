import React from 'react'
import { HeaderContainer, HeaderContent, HeaderQuote, HeaderAuthor } from './HeaderElements'

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderContent>
            <HeaderQuote>"Good food is the foundation of genuine happiness."</HeaderQuote>
            <HeaderAuthor>-Auguste Escoffier</HeaderAuthor>
        </HeaderContent>
    </HeaderContainer>
  )
}

export default Header