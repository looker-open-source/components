import * as React from 'react'
import { Box, BoxProps } from '../Box'

export const ListItem: React.FC<BoxProps<HTMLLIElement>> = ({ ...props }) => {
  return (
    <Box is="li" mb="xxsmall" {...props}>
      {props.children}
    </Box>
  )
}
