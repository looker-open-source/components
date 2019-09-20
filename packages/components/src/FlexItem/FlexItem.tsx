import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxBaseProps, BoxFlexItemProps } from '../Box'
import { hidden } from '../Flex/flexHelpers'

export interface FlexItemProps
  extends Omit<BoxBaseProps<HTMLDivElement>, 'display' | 'as'>,
    BoxFlexItemProps {
  hidden?: boolean
}
type ComponentType = FunctionComponent<FlexItemProps>
type StyledComponentType = StyledComponent<ComponentType, FlexItemProps>

const InternalFlexItem: ComponentType = props => {
  return <Box {...props}>{props.children}</Box>
}

const FlexItemFactory = React.forwardRef<StyledComponentType, FlexItemProps>(
  (props: FlexItemProps, ref: Ref<StyledComponentType>) => (
    <InternalFlexItem ref={ref} {...props} />
  )
)

/** @component */
export const FlexItem = styled<ComponentType>(FlexItemFactory)`
  ${props => hidden(props.hidden)};
`
