import * as React from 'react'

import { css, styled } from '../../style'
import { Box, BoxBaseProps, BoxFlexItemProps } from '../Box'

type InheritedBoxProps = Pick<
  BoxBaseProps,
  Exclude<keyof BoxBaseProps, 'display'>
>

export interface FlexItemProps extends InheritedBoxProps, BoxFlexItemProps {
  hidden?: boolean
}

function hidden(hide?: boolean) {
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
  ${props => hidden(props.hidden)};
`
