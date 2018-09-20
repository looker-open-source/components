import * as React from 'react'
import styled from '../../../styled_components'
import { ValidationState } from '../Form'
import { FormControl, FormControlDirections } from '../FormGroup/FormGroup'
import { InputProps } from '../Inputs/InputProps'
import { Label } from '../Label/Label'
import { ValidationMessage } from '../ValidationMessage/ValidationMessage'

export interface FieldProps extends InputProps {
  /**
   * Defines the label for the field -- a required property for all fields.
   */
  label: string
  /**
   * Holds the type of validation (error, warning, etc.) and corresponding message.
   */
  validationState?: ValidationState
  /**
   * Determines where to place the validation message in relation to the input.
   */
  alignValidationMessage?: FormControlDirections
  /**
   * Determines where to place the label in relation to the input.
   */
  alignLabel?: FormControlDirections
}

const Span = styled.span`
  color: ${props => props.theme.semanticColors.danger.darker};
`

export abstract class Field<T> extends React.Component<FieldProps & T> {
  public render() {
    return (
      <FormControl alignLabel={this.setLabelAlignment()}>
        <Label htmlFor={this.props.id}>
          {this.props.label}
          {this.props.required ? <Span> *</Span> : undefined}
        </Label>
        {this.props.validationState ? (
          <FormControl alignLabel={this.setValidationMethodAlignment()}>
            <ValidationMessage type={this.props.validationState.type}>
              {this.props.validationState.message}
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

  protected abstract setInput(): JSX.Element
}
