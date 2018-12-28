import * as React from 'react'
import { Box, BoxProps } from '../../Box'

export interface ModalFooterProps extends BoxProps<HTMLDivElement> {
  /**
   * Content that will be placed inside the DialogHeader
   * @required
   */
  children: React.ReactNode
}

export const ModalFooter: React.SFC<ModalFooterProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      is="footer"
      p="large"
      display="flex"
      justifyContent="flex-end"
      {...props}
    >
      {children}
    </Box>
  )
}
