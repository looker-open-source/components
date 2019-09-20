import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import uuid from 'uuid/v4'
import { ComponentWithForm, withForm } from '../../Form'
import { ToggleSwitch, ToggleSwitchProps } from '../../Inputs/ToggleSwitch'
import { Field, FieldProps, omitFieldProps } from '../Field'

export interface FieldToggleSwitchProps extends FieldProps, ToggleSwitchProps {}
type ComponentType = FunctionComponent<FieldToggleSwitchProps>
type StyledComponentType = StyledComponent<
  ComponentType,
  FieldToggleSwitchProps
>

const InternalFieldToggleSwitch: ComponentType = (
  props: FieldToggleSwitchProps
) => {
  const { id = uuid() } = props
  return (
    <Field
      id={id}
      alignLabel="right"
      alignValidationMessage="bottom"
      {...props}
    >
      <ToggleSwitch id={id} {...omitFieldProps(props)} />
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
