import * as React from 'react'
import styled from '../../../styled_components'
import { FormControl, FormControlDirections } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'
import {
  ValidationMessage,
  ValidationMessageProps,
} from '../ValidationMessage/ValidationMessage'

export interface FieldProps {
  /**
   * Determines where to place the label in relation to the input.
   */
  alignLabel?: FormControlDirections
  /**
   * Determines where to place the validation message in relation to the input.
   */
  alignValidationMessage?: FormControlDirections
  /**
   * Id of the input element to match a label to.
   */
  id?: string
  /**
   * Defines the label for the field -- a required property for all fields.
   */
  label?: string
  /**
   * Whether or not the field should display a `*` denoting it is required.
   */
  required?: boolean
  /**
   *
   * Holds the type of validation (error, warning, etc.) and corresponding message.
   */
  validationMessage?: ValidationMessageProps
}

const RequiredStar = styled(() => <span> *</span>)`
  color: ${props => props.theme.semanticColors.danger.darker};
`

/**
 * <Field /> allows the rendering of a label (optionally associated with a child input like <InputText/>),
 * and can render a validation message. Generally, this component is used with form inputs to give user
 * feedback about the status of the input values.
 */
export const Field = (props: FieldProps & { children?: React.ReactNode }) => {
  const renderValidation = () => {
    if (props.validationMessage) {
      return (
        <FormControl alignLabel={props.alignValidationMessage}>
          <ValidationMessage {...props.validationMessage} />
          {props.children}
        </FormControl>
      )
    }
    return props.children
  }

  return (
    <FormControl alignLabel={props.alignLabel}>
      <Label htmlFor={props.id}>
        {props.label}
        {props.required && <RequiredStar />}
      </Label>
      {renderValidation()}
    </FormControl>
  )
}
