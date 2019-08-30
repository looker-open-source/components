import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import uuid from 'uuid/v4'
import { ComponentWithForm, withForm } from '../../Form'
import { ToggleSwitch, ToggleSwitchProps } from '../../Inputs/ToggleSwitch'
import { Field, FieldProps } from '../Field'

export interface FieldToggleSwitchProps extends FieldProps, ToggleSwitchProps {}
type ComponentType = FunctionComponent<FieldToggleSwitchProps>
type StyledComponentType = StyledComponent<
  ComponentType,
  FieldToggleSwitchProps
>

const InternalFieldToggleSwitch: ComponentType = (
  props: FieldToggleSwitchProps
) => {
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

const FieldToggleSwitchFactory = React.forwardRef<
  StyledComponentType,
  FieldToggleSwitchProps
>((props: FieldToggleSwitchProps, ref: Ref<StyledComponentType>) => (
  <InternalFieldToggleSwitch ref={ref} {...props} />
))

/** @component */
export const FieldToggleSwitch: StyledComponent<
  ComponentWithForm<FieldToggleSwitchProps>,
  FieldToggleSwitchProps
> = styled<ComponentWithForm<FieldToggleSwitchProps>>(
  withForm<FieldToggleSwitchProps>(FieldToggleSwitchFactory)
)``
