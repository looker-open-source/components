import * as React from 'react'
import { Theme, withTheme } from '../../../style'
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
  theme?: Theme
}

const InternalValidationMessage: React.SFC<ValidationMessageProps> = ({
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
      fontSize={props.theme!.components.ValidationMessage.fontSize}
      color={handleValidationType()}
    >
      {message}
    </Box>
  )
}

export const ValidationMessage = withTheme(InternalValidationMessage)
