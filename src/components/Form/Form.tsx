import tag from 'clean-tag'
import * as React from 'react'
import styled from '../../styled_components'
import { reset } from '../../styles/reset'
import { FieldText } from './Fields/FieldText'

// export interface ValidationError {
//   message: string
//   errors: string[]
// }

interface Dictionary<T> {
  [key: string]: T
}

export interface FormProps {
  validationErrors?: Dictionary<string>
  onChange?: React.FormEventHandler<HTMLFormElement>
  onInput?: React.FormEventHandler<HTMLFormElement>
  onReset?: React.FormEventHandler<HTMLFormElement>
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  onInvalid?: React.FormEventHandler<HTMLFormElement>
}

const passValidationErrors = (
  children: React.ReactNode,
  validationErrors: Dictionary<string> | undefined
) => {
  if (
    validationErrors !== undefined &&
    Object.keys(validationErrors).length !== 0
  ) {
    return React.Children.map(children, child => {
      child = child as React.ReactElement<any>
      if (child.type !== FieldText) {
        // Extend to any Field* component...
        return child
      }
      return React.cloneElement(child, {
        validationError: validationErrors[child.props.name],
      })
    })
  } else {
    return children
  }
}

const InternalForm: React.SFC<FormProps> = ({
  children,
  validationErrors,
  ...props
}) => {
  return (
    <tag.form {...props}>
      {passValidationErrors(children, validationErrors)}
    </tag.form>
  )
}

export const Form = styled<FormProps>(InternalForm)`
  ${reset};
`
