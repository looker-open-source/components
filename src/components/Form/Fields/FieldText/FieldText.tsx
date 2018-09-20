import * as React from 'react'
import { FormControlDirections } from '../../FormGroup/FormGroup'
import { InputText, InputTextProps } from '../../Inputs/InputText/InputText'
import { Field } from '../Field'

export class FieldText extends Field<InputTextProps> {
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
        name={name}
        {...props}
      />
    )
  }
}
