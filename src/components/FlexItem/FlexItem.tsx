import * as React from 'react'
import { css, styled } from '../../style'
import { Box, BoxBasePropsWithout, BoxFlexItemProps } from '../Box'

export interface FlexItemProps
  extends BoxBasePropsWithout<HTMLDivElement, 'display'>,
    BoxFlexItemProps {
  hidden?: boolean
}

const InternalFlexItem: React.FC<FlexItemProps> = props => {
  return <Box {...props}>{props.children}</Box>
}

const FlexItemFactory = React.forwardRef((props: FlexItemProps, ref) => (
  <InternalFlexItem innerRef={ref} {...props} />
))

export const FlexItem = styled<FlexItemProps>(FlexItemFactory)`
  ${props => hidden(props.hidden)};
`

const hidden = (hide?: boolean) =>
  hide
    ? css`
        display: none;
      `
    : false
