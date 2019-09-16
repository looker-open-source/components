import React, { FunctionComponent } from 'react'
import styled, { StyledComponent } from 'styled-components'
import uuid from 'uuid/v4'
import { ComponentWithForm, withForm } from '../../Form'
import { Checkbox, CheckboxProps } from '../../Inputs/Checkbox/Checkbox'
import { Field, FieldProps } from '../Field'

export interface FieldCheckboxProps extends FieldProps, CheckboxProps {}
export type FieldCheckboxComponentType = FunctionComponent<FieldCheckboxProps>
export type StyledFieldCheckboxComponentType = StyledComponent<
  ComponentWithForm<FieldCheckboxProps>,
  FieldCheckboxProps
>

const InternalFieldCheckbox: FieldCheckboxComponentType = (
  props: FieldCheckboxProps
) => {
  const {
    alignLabel,
    alignValidationMessage,
    label,
    labelWidth,
    labelFontWeight,
    validationMessage,
    id = uuid(),
    ...checkboxProps
  } = props
  return (
    <Field
      {...props}
      id={id}
      alignLabel={alignLabel ? alignLabel : 'left'}
      alignValidationMessage={
        alignValidationMessage ? alignValidationMessage : 'right'
      }
    >
      <Checkbox
        id={id}
        {...checkboxProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

const FieldCheckboxFactory = React.forwardRef(
  (props: FieldCheckboxProps, ref) => (
    <InternalFieldCheckbox ref={ref} {...props} />
  )
)

/** @component */
export const FieldCheckbox: StyledFieldCheckboxComponentType = styled<
  FieldCheckboxComponentType
>(withForm<FieldCheckboxProps>(FieldCheckboxFactory))``
