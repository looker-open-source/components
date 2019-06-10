import * as React from 'react'
import { css, styled } from '../../style'
import { Box, BoxBasePropsWithout, BoxFlexProps } from '../Box'

/**
 * styled-system has its own FlexProps, so we call this one FlexBoxProps to disambiguate.
 */
export interface FlexProps
  extends BoxBasePropsWithout<HTMLDivElement, 'display'>,
    BoxFlexProps {
  hidden?: boolean
}

const InternalFlex: React.FC<FlexProps> = props => {
  return (
    <Box display="flex" {...props}>
      {props.children}
    </Box>
  )
}

const FlexFactory = React.forwardRef((props: FlexProps, ref) => (
  <InternalFlex innerRef={ref} {...props} />
))

export const Flex = styled(FlexFactory)`
  ${props => hidden(props.hidden)};
`

const hidden = (hide?: boolean) =>
  hide
    ? css`
        display: none;
      `
    : false
