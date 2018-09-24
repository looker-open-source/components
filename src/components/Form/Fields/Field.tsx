import * as React from 'react'
// import { alignContent } from 'styled-system';
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
  id: string
  /**
   * Defines the label for the field -- a required property for all fields.
   */
  label: string
  required: boolean
  /**
   *
   * Holds the type of validation (error, warning, etc.) and corresponding message.
   */
  validationMessage?: ValidationMessageProps
}

const RequiredStar = styled(() => <span> *</span>)`
  color: ${props => props.theme.semanticColors.danger.darker};
`

export const Field = (props: FieldProps & { children?: React.ReactNode }) => {
  return (
    <FormControl alignLabel={props.alignLabel}>
      <Label htmlFor={props.id}>
        {props.label}
        {props.required && <RequiredStar />}
      </Label>
      <FormControl alignLabel={props.alignValidationMessage}>
        <ValidationMessage {...props.validationMessage} />
        {props.children}
      </FormControl>
    </FormControl>
  )
}
