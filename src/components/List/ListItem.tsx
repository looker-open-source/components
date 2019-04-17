import * as React from 'react'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'

const InternalListItem: React.FC<BoxProps<HTMLLIElement>> = ({ ...props }) => {
  return (
    <Box is="li" mb="xxsmall" {...props}>
      {props.children}
    </Box>
  )
}

export const ListItem = styled(InternalListItem)``
