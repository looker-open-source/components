import * as React from 'react'
import { Box, BoxProps } from '../Box'

export const ListItem: React.SFC<BoxProps> = ({ ...props }) => {
  return (
    <Box is="li" mb="xsmall">
      {props.children}
    </Box>
  )
}
