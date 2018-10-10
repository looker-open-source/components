import * as React from 'react'
import {
  alignItems,
  AlignItemsProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
} from 'styled-system'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

export type InheritedBoxProps = Pick<
  BoxProps,
  Exclude<keyof BoxProps, 'display'>
>

export interface FlexBoxProps
  extends InheritedBoxProps,
    AlignItemsProps,
    FlexDirectionProps,
    FlexWrapProps,
    JustifyContentProps {
  className?: string
}

const InternalFlex: React.SFC<FlexBoxProps> = ({ ...props }) => {
  return (
    <Box display="flex" {...props}>
      {props.children}
    </Box>
  )
}

export const Flex = styled<FlexBoxProps>(InternalFlex)`
  ${alignItems};
  ${flexDirection};
  ${flexWrap};
  ${justifyContent};
`
