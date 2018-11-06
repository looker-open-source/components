import * as React from 'react'
import { Box, BoxProps } from '../../Box'

export type ValidationType = 'error'

export interface ValidationMessageProps extends BoxProps<HTMLDivElement> {
  /**
   * The type of validation, therefore changing the message's text color. Accepts: error.
   */
  type?: ValidationType
  /**
   * The validation message to render.
   */
  message?: string
}

export const ValidationMessage: React.SFC<ValidationMessageProps> = ({
  type,
  message,
  ...props
}) => {
  const handleValidationType = () => {
    switch (type) {
      case 'error':
        return 'palette.red700'
      default:
        return undefined
    }
  }
  return (
    <Box
      {...props}
      mr="small"
      mt="small"
      fontSize="6"
      color={handleValidationType()}
    >
      {message}
    </Box>
  )
}
