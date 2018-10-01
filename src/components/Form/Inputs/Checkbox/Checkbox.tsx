import tag from 'clean-tag'
import * as React from 'react'
import { InputProps } from '../InputProps'

export interface CheckboxProps extends InputProps {
  /**
   * Determines if the checkbox is checked or not.
   */
  checked?: boolean
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  validationType,
  ...props
}) => {
  return <tag.input type="checkbox" {...props} />
}
