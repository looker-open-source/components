import * as React from 'react'
import { withForm } from '../../Form'
import { InputText, InputTextProps } from '../../Inputs/InputText/InputText'
import { Field, FieldProps } from '../Field'

const InnerFieldText = ({
  alignLabel,
  alignValidationMessage,
  id,
  label,
  required,
  validationMessage,
  ...inputTextProps
}: FieldProps & InputTextProps) => {
  const fieldProps = {
    alignLabel,
    alignValidationMessage,
    id,
    label,
    required,
    validationMessage,
  }
  return (
    <Field {...fieldProps}>
      <InputText
        id={id}
        required={required}
        {...inputTextProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

export const FieldText = withForm(InnerFieldText)
