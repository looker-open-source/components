import * as React from 'react'
import { withForm } from '../../Form'
import { InputText, InputTextProps } from '../../Inputs/InputText/InputText'
import { Field, FieldProps } from '../Field'

interface Props extends FieldProps, InputTextProps {}

const InnerFieldText = (props: Props) => {
  const {
    alignLabel,
    alignValidationMessage,
    label,
    validationMessage,
    ...inputTextProps
  } = props
  return (
    <Field {...props}>
      <InputText
        {...inputTextProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

export const FieldText = withForm(InnerFieldText)
