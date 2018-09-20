import tag from 'clean-tag'
import * as React from 'react'
import { Field } from './Fields/Field'

export type ValidationType = 'error' | 'warning' | 'info' | 'success'

export interface ValidationState {
  type: ValidationType
  message: string
}

interface Dictionary<T> {
  [key: string]: T
}

export interface FormProps {
  validationStates?: Dictionary<ValidationState>
  onChange?: React.FormEventHandler<HTMLFormElement>
  onInput?: React.FormEventHandler<HTMLFormElement>
  onReset?: React.FormEventHandler<HTMLFormElement>
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  onInvalid?: React.FormEventHandler<HTMLFormElement>
}

const passValidationStates = (
  children: React.ReactNode,
  validationStates: Dictionary<ValidationState> | undefined
) => {
  if (
    validationStates !== undefined &&
    Object.keys(validationStates).length !== 0
  ) {
    return React.Children.map(children, child => {
      child = child as React.ReactElement<any>

      if (!Field.isPrototypeOf(child.type) || child.props.name === undefined) {
        return child
      }
      return React.cloneElement(child, {
        validationState: validationStates[child.props.name],
      })
    })
  } else {
    return children
  }
}

export const Form: React.SFC<FormProps> = ({
  children,
  validationStates,
  ...props
}) => {
  return (
    <tag.form {...props}>
      {passValidationStates(children, validationStates)}
    </tag.form>
  )
}
