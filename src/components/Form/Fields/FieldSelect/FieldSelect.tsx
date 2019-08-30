import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import uuid from 'uuid/v4'
import { ComponentWithForm, withForm } from '../../Form'
import { Select, SelectProps } from '../../Inputs/Select/Select'
import { Field, FieldProps } from '../Field'

export interface FieldSelectProps extends FieldProps, SelectProps {}
type ComponentType = FunctionComponent<FieldSelectProps>
type StyledComponentType = StyledComponent<ComponentType, FieldSelectProps>

const InternalFieldSelect: ComponentType = (props: FieldSelectProps) => {
  const {
    alignLabel,
    alignValidationMessage,
    label,
    labelWidth,
    labelFontWeight,
    validationMessage,
    id = uuid(),
    ...inputSelectProps
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
        {...inputSelectProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

const FieldSelectFactory = React.forwardRef<
  StyledComponentType,
  FieldSelectProps
>((props: FieldSelectProps, ref: Ref<StyledComponentType>) => (
  <InternalFieldSelect ref={ref} {...props} />
))

/** @component */
export const FieldSelect: StyledComponent<
  ComponentWithForm<FieldSelectProps>,
  FieldSelectProps
> = styled<ComponentWithForm<FieldSelectProps>>(
  withForm<FieldSelectProps>(FieldSelectFactory)
)``
