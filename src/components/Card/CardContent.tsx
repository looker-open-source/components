import * as React from 'react'
import { Box, BoxProps } from '../Box'

export const CardContent: React.FC<BoxProps<HTMLDivElement>> = ({
  ...props
}) => (
  <Box p="medium" {...props}>
    {props.children}
  </Box>
)
