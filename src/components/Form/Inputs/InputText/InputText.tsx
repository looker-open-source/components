import * as React from 'react'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

export interface InputTextProps extends BoxProps<HTMLInputElement>, InputProps {
  /**
   * Specifies value of the input field.
   */
  value?: string
  /**
   * Displays an example value or short hint to the user. Should not replace a label.
   */
  placeholder?: string
}

export const InputText: React.SFC<InputTextProps> = ({
  validationType,
  ...props
}) => {
  const handleValidationType = () => {
    switch (validationType) {
      case 'error':
        return 'palette.red000'
      default:
        return undefined
    }
  }
  const type = { type: 'text' }
  return (
    <Box
      is="input"
      {...props}
      {...type}
      borderRadius="4px"
      height="28px"
      py="none"
      px="small"
      fontSize="5"
      bg={handleValidationType()}
      border="solid 1px"
      borderColor="palette.charcoal300"
    />
  )
}
