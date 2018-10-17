import * as React from 'react'
import { Box } from '../Box'

export const Popover: React.SFC = ({ children, ...props }) => {
  return (
    <Box position="absolute" {...props}>
      {children}
    </Box>
  )
}
