import * as React from 'react'
import uuid from 'uuid/v4'
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
    labelFontWeight,
    validationMessage,
    id = uuid(),
    ...checkboxProps
  } = props
  return (
    <Field
      {...props}
      id={id}
      alignLabel={alignLabel ? alignLabel : 'left'}
      alignValidationMessage={
        alignValidationMessage ? alignValidationMessage : 'right'
      }
    >
      <Checkbox
        id={id}
        {...checkboxProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

export const FieldCheckbox = withForm(InternalFieldCheckbox)
