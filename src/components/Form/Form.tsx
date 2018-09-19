import tag from 'clean-tag'
import * as React from 'react'
import styled from '../../styled_components'
import { reset } from '../../styles/reset'
import { FieldProps } from './Fields/Field'
import { FieldText } from './Fields/FieldText'

export type ValidationType = 'error' | 'warning' | 'confirmation'

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

function isField(item: any): item is FieldProps {
  return (item as FieldProps).validationState !== undefined
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
      if (!isField(child.props) || child.props.name === undefined) {
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

const InternalForm: React.SFC<FormProps> = ({
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

export const Form = styled<FormProps>(InternalForm)`
  ${reset};
`
