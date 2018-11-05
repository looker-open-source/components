import * as React from 'react'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

export interface RadioProps extends BoxProps, InputProps {
  /**
   * Determines if the radio button is selected or not.
   */
  checked?: boolean
}

export const Radio: React.SFC<RadioProps> = ({ validationType, ...props }) => {
  const type = { type: 'radio' }
  return <Box is="input" {...props} {...type} />
}
