import React from 'react'
import { CustomizableAttributes } from '@looker/design-tokens'
import { Box, BoxProps } from '../../Layout/Box'

export type ValidationType = 'error'

export const CustomizableValidationMessageAttributes: CustomizableAttributes = {
  fontSize: 'xsmall',
}

export interface ValidationMessageProps
  extends Omit<BoxProps<HTMLDivElement>, 'as'> {
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
