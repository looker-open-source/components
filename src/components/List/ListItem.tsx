import * as React from 'react'
import { Box, BoxProps } from '../Box'

export const ListItem: React.SFC<BoxProps<HTMLLIElement>> = ({ ...props }) => {
  return (
    <Box is="li" mb="xsmall" {...props}>
      {props.children}
    </Box>
  )
}
