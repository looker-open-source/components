import React, { FunctionComponent, Ref } from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import { Box, BoxBaseProps, BoxFlexProps } from '../Box'

/**
 * styled-system has its own FlexProps, so we call this one FlexBoxProps to disambiguate.
 */
export interface FlexProps
  extends Omit<BoxBaseProps<HTMLDivElement>, 'display' | 'as'>,
    BoxFlexProps {
  hidden?: boolean
}

type ComponentType = FunctionComponent<FlexProps>
type StyledComponentType = StyledComponent<ComponentType, FlexProps>

const InternalFlex: ComponentType = props => {
  return (
    <Box display="flex" {...props}>
      {props.children}
    </Box>
  )
}

const FlexFactory = React.forwardRef<StyledComponentType, FlexProps>(
  (props: FlexProps, ref: Ref<StyledComponentType>) => (
    <InternalFlex ref={ref} {...props} />
  )
)

/** @component */
export const Flex = styled<ComponentType>(FlexFactory)`
  ${(props: FlexProps) => hidden(props.hidden)};
`

const hidden = (hide?: boolean) =>
  hide
    ? css`
        display: none;
      `
    : false
