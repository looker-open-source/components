import * as React from 'react'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

export interface RadioProps extends BoxProps<HTMLInputElement>, InputProps {
  /**
   * Determines if the radio button is selected or not.
   */
  checked?: boolean
}

export const Radio: React.FC<RadioProps> = ({ validationType, ...props }) => {
  const type = { type: 'radio' }
  return <Box is="input" {...props} {...type} />
}
