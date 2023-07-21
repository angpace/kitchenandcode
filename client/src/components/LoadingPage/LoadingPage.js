import React from 'react'
import { SpinnerContainer } from './LoadingElements'

const LoadingPage = () => {
  return (
   <SpinnerContainer>
        <div class="spinner-grow text-light" role="status">
            <span class="sr-only">Loading...</span>
            </div>
                <div class="spinner-grow text-dark" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                    <div class="spinner-grow text-light" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
    </SpinnerContainer>
  )
}

export default LoadingPage