import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import uuid from 'uuid/v4'
import { ComponentWithForm, withForm } from '../../Form'
import { InputText, InputTextProps } from '../../Inputs/InputText/InputText'
import { Field, FieldProps } from '../Field'

export interface FieldTextProps extends FieldProps, InputTextProps {}
type ComponentType = FunctionComponent<FieldTextProps>
type StyledComponentType = StyledComponent<ComponentType, FieldTextProps>

const InternalFieldText: ComponentType = (props: FieldTextProps) => {
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
      <InputText
        id={id}
        {...inputTextProps}
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
