import * as React from 'react'
import uuid from 'uuid/v4'
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
    id = uuid(),
    ...radioProps
  } = props
  return (
    <Field
      id={id}
      {...props}
      alignLabel={alignLabel ? alignLabel : 'right'}
      alignValidationMessage={
        alignValidationMessage ? alignValidationMessage : 'right'
      }
    >
      <Radio
        id={id}
        {...radioProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

export const FieldRadio = withForm(InternalFieldRadio)
