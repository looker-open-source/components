import * as React from 'react'
import { Box } from '../Box'

export const CardContent: React.SFC = ({ ...props }) => (
  <Box p="medium" {...props}>
    {props.children}
  </Box>
)
