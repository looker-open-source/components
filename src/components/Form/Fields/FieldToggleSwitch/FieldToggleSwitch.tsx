import * as React from 'react'
import uuid from 'uuid/v4'
import { withForm } from '../../Form'
import { ToggleSwitch, ToggleSwitchProps } from '../../Inputs/ToggleSwitch'
import { Field, FieldProps } from '../Field'

interface FieldToggleSwitchProps extends FieldProps, ToggleSwitchProps {}

const InternalFieldToggleSwitch = (props: FieldToggleSwitchProps) => {
  const {
    alignLabel,
    alignValidationMessage,
    label,
    labelWidth,
    labelFontWeight,
    validationMessage,
    id = uuid(),
    ariaId = uuid(),
    ...inputToggleSwitchProps
  } = props
  return (
    <Field
      ariaId={ariaId}
      id={id}
      alignLabel={alignLabel ? alignLabel : 'right'}
      {...props}
      alignValidationMessage={
        alignValidationMessage ? alignValidationMessage : 'bottom'
      }
    >
      <ToggleSwitch
        ariaLabelledBy={ariaId}
        id={id}
        {...inputToggleSwitchProps}
      />
    </Field>
  )
}

export const FieldToggleSwitch = withForm(InternalFieldToggleSwitch)
