import * as React from 'react'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

export type ListItemProps = BoxProps<HTMLLIElement>

const InternalListItem: React.FC<ListItemProps> = props => (
  <Box is="li" mb="xxsmall" {...props}>
    {props.children}
  </Box>
)

const ListItemFactory = React.forwardRef((props: ListItemProps, ref) => (
  <InternalListItem innerRef={ref} {...props} />
))

export const ListItem = styled(ListItemFactory)``
