import React from 'react'
import { Box, BoxProps } from '../Box'

export const PopoverContent: React.FC<Omit<BoxProps<HTMLDivElement>, 'as'>> = ({
  ...props
}) => <Box p="small" {...props} />
