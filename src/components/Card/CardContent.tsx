import * as React from 'react'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

export type CardContentProps = BoxProps<HTMLDivElement>

const InternalCardContent: React.FC<CardContentProps> = props => (
  <Box p="medium" {...props}>
    {props.children}
  </Box>
)

const CardContentFactory = React.forwardRef((props: CardContentProps, ref) => (
  <InternalCardContent
    innerRef={ref as React.RefObject<HTMLElement>}
    {...props}
  />
))

export const CardContent = styled<CardContentProps>(CardContentFactory)``
