import * as React from 'react'
import {
  alignItems,
  flex,
  flexDirection,
  FlexProps,
  flexWrap,
  justifyContent,
} from 'styled-system'
import { styled } from '../../style'
import { Box } from '../Box'

export interface FlexBoxProps extends FlexProps {
  className?: string
}

const InternalFlex: React.SFC<FlexProps> = ({ ...props }) => {
  return <Box {...props}>{props.children}</Box>
}

export const Flex = styled<FlexBoxProps>(InternalFlex)`
  display: flex;
  ${alignItems};
  ${flexDirection};
  ${flexWrap};
  ${justifyContent};
  ${flex};
`
