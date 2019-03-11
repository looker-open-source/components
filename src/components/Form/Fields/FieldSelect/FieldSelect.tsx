import * as React from 'react'
import uuid from 'uuid/v4'
import { withForm } from '../../Form'
import { Select, SelectProps } from '../../Inputs/Select/Select'
import { Field, FieldProps } from '../Field'

interface FieldTextProps extends FieldProps, SelectProps {}

const InternalFieldSelect = (props: FieldTextProps) => {
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
      <Select
        id={id}
        {...inputTextProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

export const FieldSelect = withForm(InternalFieldSelect)
