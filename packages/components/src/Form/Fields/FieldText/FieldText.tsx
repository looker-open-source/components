import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import uuid from 'uuid/v4'
import { ComponentWithForm, withForm } from '../../Form'
import { InputText, InputTextProps } from '../../Inputs/InputText/InputText'
import { Field, FieldProps, omitFieldProps } from '../Field'

export interface FieldTextProps extends FieldProps, InputTextProps {}
type ComponentType = FunctionComponent<FieldTextProps>
type StyledComponentType = StyledComponent<ComponentType, FieldTextProps>

const InternalFieldText: ComponentType = (props: FieldTextProps) => {
  const { validationMessage, id = uuid() } = props
  return (
    <Field id={id} alignValidationMessage="bottom" {...props}>
      <InputText
        {...omitFieldProps(props)}
        id={id}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

const FieldTextFactory = React.forwardRef<StyledComponentType, FieldTextProps>(
  (props: FieldTextProps, ref: Ref<StyledComponentType>) => (
    <InternalFieldText ref={ref} {...props} />
  )
)

/** @component */
export const FieldText: StyledComponent<
  ComponentWithForm<FieldTextProps>,
  FieldTextProps
> = styled<ComponentWithForm<FieldTextProps>>(
  withForm<FieldTextProps>(FieldTextFactory)
)``
