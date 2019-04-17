import * as React from 'react'
import uuid from 'uuid/v4'
import { styled } from '../../../../style'
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
    labelFontWeight,
    validationMessage,
    id = uuid(),
    ...inputTextProps
  } = props
  return (
    <Field
      id={id}
      {...props}
      alignValidationMessage={
        alignValidationMessage ? alignValidationMessage : 'bottom'
      }
    >
      <InputText
        id={id}
        {...inputTextProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

export const FieldText = styled(withForm(InternalFieldText))``
