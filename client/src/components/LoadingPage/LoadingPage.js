import React from 'react'
import { SpinnerContainer } from './LoadingElements'

const LoadingPage = () => {
  return (
   <SpinnerContainer>
        <div className="spinner-grow spinner-grow-sm text-dark" role="status">
            </div>
            <div className="spinner-grow spinner-grow-sm text-dark" role="status"> 
            </div>
            <div className="spinner-grow spinner-grow-sm text-dark" role="status">
            </div>
    </SpinnerContainer>
  )
}

export default LoadingPage