import * as React from 'react'
import { FieldJSX, FieldProps } from './Field'

export const FieldText: React.SFC<FieldProps> = ({
  id,
  label,
  name,
  alignLabel,
  validationState,
  alignValidationMessage,
  ...props
}) => {
  return FieldJSX<typeof props>(
    'FieldText',
    id,
    label,
    name,
    alignLabel,
    validationState,
    alignValidationMessage,
    props
  )
}
