import React from 'react'
import { WelcomeButton, WelcomeHeading, WelcomePage, Bell } from './WelcomeElements'
import {useNavigate } from 'react-router-dom'

const Welcome = () => {
    let nav = useNavigate()

  return (
    <WelcomePage>
        <WelcomeHeading>Kitchen and Code</WelcomeHeading>
        <WelcomeButton onClick={() => nav("/home")}>Come on in → </WelcomeButton>
    </WelcomePage>
  )
}

export default Welcome