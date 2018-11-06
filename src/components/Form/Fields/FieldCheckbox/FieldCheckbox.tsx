import * as React from 'react'
import { withForm } from '../../Form'
import { Checkbox, CheckboxProps } from '../../Inputs/Checkbox/Checkbox'
import { Field, FieldProps } from '../Field'

interface FieldCheckboxProps extends FieldProps, CheckboxProps {}

const InternalFieldCheckbox = (props: FieldCheckboxProps) => {
  const {
    alignLabel,
    alignValidationMessage,
    label,
    labelWidth,
    validationMessage,
    ...checkboxProps
  } = props
  return (
    <Field
      {...props}
      alignLabel={alignLabel ? alignLabel : 'left'}
      alignValidationMessage={
        alignValidationMessage ? alignValidationMessage : 'right'
      }
    >
      <Checkbox
        {...checkboxProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

export const FieldCheckbox = withForm(InternalFieldCheckbox)
