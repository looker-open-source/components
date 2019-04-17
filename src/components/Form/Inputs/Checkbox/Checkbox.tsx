import * as React from 'react'
import { styled } from '../../../../style'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

export interface CheckboxProps extends BoxProps<HTMLInputElement>, InputProps {
  /**
   * Determines if the checkbox is checked or not.
   */
  checked?: boolean
}

const InternalCheckbox: React.FC<CheckboxProps> = ({
  validationType,
  ...props
}) => {
  const type = { type: 'checkbox' }
  return <Box is="input" {...props} {...type} />
}

export const Checkbox = styled<CheckboxProps>(InternalCheckbox)``
