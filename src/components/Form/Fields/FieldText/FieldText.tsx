import * as React from 'react'
import { withForm } from '../../Form'
import { InputText, InputTextProps } from '../../Inputs/InputText/InputText'
import { Field, FieldProps } from '../Field'

interface FieldTextProps extends FieldProps, InputTextProps {}

const InternalFieldText = (props: FieldTextProps) => {
  const {
    alignLabel,
    alignValidationMessage,
    label,
    labelWidth,
    validationMessage,
    ...inputTextProps
  } = props
  return (
    <Field
      {...props}
      alignValidationMessage={
        alignValidationMessage ? alignValidationMessage : 'bottom'
      }
    >
      <InputText
        {...inputTextProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

export const FieldText = withForm(InternalFieldText)
