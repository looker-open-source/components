import * as React from 'react'
import { styled, withTheme } from '../../style'
import { ThemedProps } from '../../types'
import { Box, BoxProps } from '../Box'

export interface CardMediaProps extends BoxProps<HTMLDivElement> {
  image: string
}

const InternalCardMedia: React.SFC<ThemedProps<CardMediaProps>> = ({
  image,
  ...props
}) => <Box {...props}>{props.children}</Box>

export const CardMedia = styled<CardMediaProps>(withTheme(InternalCardMedia))`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image});
  overflow: hidden;
  height: 0;
  padding-top: 56%;
`
