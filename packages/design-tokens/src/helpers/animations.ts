import { keyframes, Keyframes } from 'styled-components'

export const fadeIn: Keyframes = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`

export const fadeOut: Keyframes = keyframes`
  0% {opacity: 100;}
  100% {opacity: 0;}
`

export const quarterFade: Keyframes = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0.25;}
`
