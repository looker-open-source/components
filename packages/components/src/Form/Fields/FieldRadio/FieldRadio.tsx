import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import uuid from 'uuid/v4'
import { ComponentWithForm, withForm } from '../../Form'
import { Radio, RadioProps } from '../../Inputs'
import { Field, FieldProps, omitFieldProps } from '../Field'

export interface FieldRadioProps extends FieldProps, RadioProps {}

type ComponentType = FunctionComponent<FieldRadioProps>
type StyledComponentType = StyledComponent<ComponentType, FieldRadioProps>

const InternalFieldRadio: ComponentType = (props: FieldRadioProps) => {
  const { id = uuid(), validationMessage } = props
  return (
    <Field
      id={id}
      alignLabel={'right'}
      alignValidationMessage={'right'}
      {...props}
    >
      <Radio
        id={id}
        {...omitFieldProps(props)}
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
