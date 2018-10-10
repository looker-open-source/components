import * as React from 'react'
import {
  alignSelf,
  AlignSelfProps,
  flex,
  flexBasis,
  FlexBasisProps,
  FlexProps,
  order,
  OrderProps,
} from 'styled-system'

import { css, styled } from '../../style'
import { Box, BoxProps } from '../Box'

export type InheritedBoxProps = Pick<
  BoxProps,
  Exclude<keyof BoxProps, 'display'>
>

export interface FlexItemProps
  extends InheritedBoxProps,
    AlignSelfProps,
    OrderProps,
    FlexProps,
    FlexBasisProps {
  className?: string
  hidden?: boolean
}

function hidden(hide: boolean | undefined) {
  if (hide) {
    return css`
      display: none;
    `
  } else {
    return false
  }
}

const InternalFlexItem: React.SFC<FlexItemProps> = ({ ...props }) => {
  return <Box {...props}>{props.children}</Box>
}

export const FlexItem = styled<FlexItemProps>(InternalFlexItem)`
  ${alignSelf};
  ${order};
  ${flex};
  ${flexBasis};
  ${props => hidden(props.hidden || false)};
`
