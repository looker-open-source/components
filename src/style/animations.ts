import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`

export const fadeOut = keyframes`
  0% {opacity: 100;}
  100% {opacity: 0;}
`

export const quarterFade = keyframes`
  from {opacity: 1;}
  to {opacity: 0.25;}
`
