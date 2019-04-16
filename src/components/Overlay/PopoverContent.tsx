import * as React from 'react'
import { Box, BoxProps } from '../Box'

export const PopoverContent: React.FC<BoxProps<HTMLDivElement>> = ({
  ...props
}) => <Box p="small" {...props} />
