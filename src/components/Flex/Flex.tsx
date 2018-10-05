import * as React from 'react'
import {
  alignItems,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
} from 'styled-system'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

export type InheritedBoxProps = Pick<
  BoxProps,
  Exclude<keyof BoxProps, 'display'>
>

export interface FlexBoxProps extends InheritedBoxProps {
  className?: string
}

const InternalFlex: React.SFC<FlexBoxProps> = ({ ...props }) => {
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
