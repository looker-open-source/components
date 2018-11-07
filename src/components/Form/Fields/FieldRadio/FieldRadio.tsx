import * as React from 'react'
import { withForm } from '../../Form'
import { Radio, RadioProps } from '../../Inputs'
import { Field, FieldProps } from '../Field'

interface FieldRadioProps extends FieldProps, RadioProps {}

const InternalFieldRadio = (props: FieldRadioProps) => {
  const {
    alignLabel,
    alignValidationMessage,
    label,
    labelFontWeight,
    validationMessage,
    ...radioProps
  } = props
  return (
    <Field
      {...props}
      alignLabel={alignLabel ? alignLabel : 'right'}
      alignValidationMessage={
        alignValidationMessage ? alignValidationMessage : 'right'
      }
    >
      <Radio
        {...radioProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

export const FieldRadio = withForm(InternalFieldRadio)
