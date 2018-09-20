import * as React from 'react'
import styled from '../../../styled_components'
import { ValidationState } from '../Form'
import { FormControl, FormControlDirections } from '../FormGroup/FormGroup'
import { InputProps } from '../Inputs/InputProps'
import { Label } from '../Label/Label'
import { ValidationMessage } from '../ValidationMessage/ValidationMessage'

export interface FieldProps extends InputProps {
  label: string
  /**
   * Holds the type of validation (error, warning, etc.) and corresponding message.
   */
  validationState?: ValidationState
  /**
   * Determines where to place the validation message in relation to the field.
   */
  alignValidationMessage?: FormControlDirections
  alignLabel?: FormControlDirections
}

const Span = styled.span`
  color: ${props => props.theme.semanticColors.danger.darker};
`

export abstract class Field extends React.Component<FieldProps> {
  public render() {
    const {
      id,
      label,
      name,
      alignLabel,
      validationState,
      alignValidationMessage,
      ...props
    } = this.props
    return (
      <FormControl alignLabel={this.setLabelAlignment()}>
        <Label htmlFor={id}>
          {label}
          {props.required ? <Span> *</Span> : undefined}
        </Label>
        {validationState ? (
          <FormControl alignLabel={this.setValidationMethodAlignment()}>
            <ValidationMessage type={validationState.type}>
              {validationState.message}
            </ValidationMessage>
            {this.setInput()}
          </FormControl>
        ) : (
          this.setInput()
        )}
      </FormControl>
    )
  }

  protected abstract setLabelAlignment(): FormControlDirections | undefined

  protected abstract setValidationMethodAlignment():
    | FormControlDirections
    | undefined

  protected abstract setInput(): any
}
