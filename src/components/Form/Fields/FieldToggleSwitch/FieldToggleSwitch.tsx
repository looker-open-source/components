import * as React from 'react'
import uuid from 'uuid/v4'
import { styled } from '../../../../style'
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
    ...inputToggleSwitchProps
  } = props
  return (
    <Field
      id={id}
      alignLabel={alignLabel ? alignLabel : 'right'}
      {...props}
      alignValidationMessage={
        alignValidationMessage ? alignValidationMessage : 'bottom'
      }
    >
      <ToggleSwitch id={id} {...inputToggleSwitchProps} />
    </Field>
  )
}

const FieldToggleSwitchFactory = React.forwardRef(
  (props: FieldToggleSwitchProps, ref) => (
    <InternalFieldToggleSwitch
      innerRef={ref as React.RefObject<HTMLElement>}
      {...props}
    />
  )
)

export const FieldToggleSwitch = styled(withForm(FieldToggleSwitchFactory))``
