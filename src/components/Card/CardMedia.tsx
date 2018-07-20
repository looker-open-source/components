// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../themes'
export { ThemeInterface }
// End Typescript component boilerplate

export interface CardMediaProps {
  image: string
}

export const CardMedia = styled<CardMediaProps, 'div'>('div')`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image});
  overflow: hidden;
  height: 0;
  padding-top: 56%;
`
