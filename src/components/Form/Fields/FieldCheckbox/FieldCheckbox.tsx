import * as React from 'react'
import { FormControlDirections } from '../../FormGroup/FormGroup'
import { Checkbox, CheckboxProps } from '../../Inputs/Checkbox/Checkbox'
import { Field } from '../Field'

export class FieldCheckbox extends Field<CheckboxProps> {
  public render() {
    return super.render()
  }

  protected setLabelAlignment(): FormControlDirections | undefined {
    return this.props.alignLabel ? this.props.alignLabel : 'left'
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
      <Checkbox
        validationType={validationState ? validationState.type : undefined}
        id={id}
        name={name}
        {...props}
      />
    )
  }
}
