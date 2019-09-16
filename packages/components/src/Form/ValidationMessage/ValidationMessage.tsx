import * as React from 'react'
import { CustomizableAttributes } from '../../../types/attributes'
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

export const ValidationMessage: React.FC<ValidationMessageProps> = ({
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
      mr="xsmall"
      mt="xsmall"
      fontSize={CustomizableValidationMessageAttributes.fontSize}
      color={handleValidationType()}
    >
      {message}
    </Box>
  )
}

export const CustomizableValidationMessageAttributes: CustomizableAttributes = {
  fontSize: 'xsmall',
}
