import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import uuid from 'uuid/v4'
import { ComponentWithForm, withForm } from '../../Form'
import { Radio, RadioProps } from '../../Inputs'
import { Field, FieldProps } from '../Field'

export interface FieldRadioProps extends FieldProps, RadioProps {}

type ComponentType = FunctionComponent<FieldRadioProps>
type StyledComponentType = StyledComponent<ComponentType, FieldRadioProps>

const InternalFieldRadio: ComponentType = (props: FieldRadioProps) => {
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

const FieldRadioFactory = React.forwardRef<
  StyledComponentType,
  FieldRadioProps
>((props: FieldRadioProps, ref: Ref<StyledComponentType>) => (
  <InternalFieldRadio ref={ref} {...props} />
))

/** @component */
export const FieldRadio: StyledComponent<
  ComponentWithForm<FieldRadioProps>,
  FieldRadioProps
> = styled<ComponentWithForm<FieldRadioProps>>(
  withForm<FieldRadioProps>(FieldRadioFactory)
)``
