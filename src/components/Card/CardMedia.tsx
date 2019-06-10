import * as React from 'react'
import { backgroundPosition, BackgroundPositionProps } from 'styled-system'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

export interface CardMediaProps
  extends BoxProps<HTMLDivElement>,
    BackgroundPositionProps {
  image: string
}

const InternalCardMedia: React.FC<CardMediaProps> = ({ image, ...props }) => (
  <Box {...props}>{props.children}</Box>
)

const CardMediaFactory = React.forwardRef((props: CardMediaProps, ref) => (
  <InternalCardMedia innerRef={ref} {...props} />
))

export const CardMedia = styled<CardMediaProps>(CardMediaFactory)`
  background-size: cover;
  background-repeat: no-repeat;
  ${backgroundPosition}
  background-image: url(${props => props.image});
  overflow: hidden;
  height: 0;
  padding-top: 56%;
`
