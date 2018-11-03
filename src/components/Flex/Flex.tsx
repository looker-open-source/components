import * as React from 'react'
import { css, styled } from '../../style'
import { Box, BoxBasePropsWithout, BoxFlexProps } from '../Box'

/**
 * styled-system has its own FlexProps, so we call this one FlexBoxProps to disambiguate.
 */
export interface FlexBoxProps
  extends BoxBasePropsWithout<HTMLDivElement, 'display'>,
    BoxFlexProps {
  hidden?: boolean
}

const InternalFlex: React.SFC<FlexBoxProps> = ({ ...props }) => {
  return (
    <Box display="flex" {...props}>
      {props.children}
    </Box>
  )
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

export const Flex = styled(InternalFlex)`
  ${props => hidden(props.hidden)};
`
