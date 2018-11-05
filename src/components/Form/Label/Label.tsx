import * as React from 'react'
import { Box, BoxProps } from '../../Box'

export interface LabelProps extends BoxProps {
  htmlFor?: string
}

export const Label: React.SFC<LabelProps> = ({ ...props }) => {
  return (
    <Box
      is="label"
      {...props}
      mr="small"
      fontWeight="bold"
      color="palette.charcoal800"
      fontSize="5"
    >
      {props.children}
    </Box>
  )
}
