import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'

import { Box, BoxProps } from '../Layout/Box'

export type CardContentProps = Omit<BoxProps<HTMLDivElement>, 'as'>
type ComponentType = FunctionComponent<CardContentProps>
type StyledComponentType = StyledComponent<ComponentType, CardContentProps>

const InternalCardContent: ComponentType = props => (
  <Box p="medium" {...props}>
    {props.children}
  </Box>
)

const CardContentFactory = React.forwardRef<
  StyledComponentType,
  CardContentProps
>((props: CardContentProps, ref: Ref<StyledComponentType>) => (
  <InternalCardContent ref={ref} {...props} />
))

/** @component */
export const CardContent = styled<ComponentType>(CardContentFactory)``
