import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import uuid from 'uuid/v4'
import { ComponentWithForm, withForm } from '../../Form'
import { Select, SelectProps } from '../../Inputs/Select/Select'
import { Field, FieldProps, omitFieldProps } from '../Field'

export interface FieldSelectProps extends FieldProps, SelectProps {}
type ComponentType = FunctionComponent<FieldSelectProps>
type StyledComponentType = StyledComponent<ComponentType, FieldSelectProps>

const InternalFieldSelect: ComponentType = (props: FieldSelectProps) => {
  const { id = uuid(), validationMessage } = props
  return (
    <Field id={id} alignValidationMessage="bottom" {...props}>
      <Select
        id={id}
        {...omitFieldProps(props)}
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
