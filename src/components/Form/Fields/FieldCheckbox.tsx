import * as React from 'react'
import { FieldJSX, FieldProps } from './Field'

export const FieldCheckbox: React.SFC<FieldProps> = ({
  id,
  label,
  name,
  alignLabel,
  validationState,
  alignValidationMessage,
  ...props
}) => {
  return FieldJSX<typeof props>(
    'FieldCheckbox',
    id,
    label,
    name,
    alignLabel,
    validationState,
    alignValidationMessage,
    props
  )
}
