import * as React from 'react'

import { css, styled } from '../../style'
import { Box, BoxBasePropsWithout, BoxFlexItemProps } from '../Box'

export interface FlexItemProps
  extends BoxBasePropsWithout<HTMLDivElement, 'display'>,
    BoxFlexItemProps {
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
