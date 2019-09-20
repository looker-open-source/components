import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { backgroundPosition, BackgroundPositionProps } from 'styled-system'
import omit from 'lodash/omit'
import { Box, BoxProps } from '../Box'

export interface CardMediaProps
  extends Omit<BoxProps<HTMLDivElement>, 'as'>,
    BackgroundPositionProps {
  image: string
}
type ComponentType = FunctionComponent<CardMediaProps>
type StyledComponentType = StyledComponent<ComponentType, CardMediaProps>

const InternalCardMedia: React.FC<CardMediaProps> = props => (
  <Box {...omit(props, 'image')} />
)

const CardMediaFactory = React.forwardRef<StyledComponentType, CardMediaProps>(
  (props: CardMediaProps, ref: Ref<StyledComponentType>) => (
    <InternalCardMedia ref={ref} {...props} />
  )
)

/** @component */
export const CardMedia = styled<ComponentType>(CardMediaFactory)`
  background-size: cover;
  background-repeat: no-repeat;
  ${backgroundPosition}
  background-image: url(${props => props.image});
  overflow: hidden;
  height: 0;
  padding-top: 56%;
`
