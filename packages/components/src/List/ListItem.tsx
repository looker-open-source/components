import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../Box'

export type ListItemProps = BoxProps<HTMLLIElement>
type ComponentType = FunctionComponent<ListItemProps>
type StyledComponentType = StyledComponent<ComponentType, ListItemProps>

const InternalListItem: ComponentType = props => (
  <Box
    // @ts-ignore
    as="li"
    mb="xxsmall"
    {...props}
  >
    {props.children}
  </Box>
)

const ListItemFactory = React.forwardRef<StyledComponentType, ListItemProps>(
  (props: ListItemProps, ref: Ref<StyledComponentType>) => (
    <InternalListItem ref={ref} {...props} />
  )
)

/** @component */
export const ListItem = styled<ComponentType>(ListItemFactory)``
