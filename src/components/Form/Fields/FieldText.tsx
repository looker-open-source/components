import * as React from 'react'
import { FormControlDirections } from '../FormGroup/FormGroup'
import { InputText } from '../Inputs/InputText'
import { Field } from './Field'

export class FieldText extends Field {
  public render() {
    return super.render()
  }

  protected setLabelAlignment(): FormControlDirections | undefined {
    return this.props.alignLabel
  }

  protected setValidationMethodAlignment(): FormControlDirections | undefined {
    return this.props.alignValidationMessage
      ? this.props.alignValidationMessage
      : 'bottom'
  }

  protected setInput() {
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
      <InputText
        validationType={validationState ? validationState.type : undefined}
        id={id}
        name={name}
        {...props}
      />
    )
  }
}
