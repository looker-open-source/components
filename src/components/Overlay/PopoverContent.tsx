import * as React from 'react'
import { Box, BoxProps } from '../Box'

export const PopoverContent: React.SFC<BoxProps<HTMLDivElement>> = ({
  ...props
}) => <Box p="small" {...props} />
