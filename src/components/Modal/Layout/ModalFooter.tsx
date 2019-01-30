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
  /*
   * @TODO / Note: When chrome supports `flex-basis: fit-content` minHeight can be removed
   */
  return (
    <Box
      display="flex"
      flexBasis="fit-content"
      is="footer"
      justifyContent="flex-end"
      minHeight="4.75rem"
      p="large"
      {...props}
    >
      {' '}
      {children}
    </Box>
  )
}
