import * as React from 'react'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

export interface CheckboxProps extends BoxProps<HTMLInputElement>, InputProps {
  /**
   * Determines if the checkbox is checked or not.
   */
  checked?: boolean
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  validationType,
  ...props
}) => {
  const type = { type: 'checkbox' }
  return <Box is="input" {...props} {...type} />
}
