import tag from 'clean-tag'
import * as React from 'react'
import styled from '../../styled_components'
import { reset } from '../../styles/reset'

export interface ValidationError {
  message: string
  errors: string[]
}

interface Dictionary<T> {
  [key: string]: T
}

export interface FormProps {
  children?: React.ReactNode
  validationErrors?: Dictionary<ValidationError>
  onChange?: React.FormEventHandler<HTMLFormElement>
  onInput?: React.FormEventHandler<HTMLFormElement>
  onReset?: React.FormEventHandler<HTMLFormElement>
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  onInvalid?: React.FormEventHandler<HTMLFormElement>
}

const passValidationErrors = (
  children: React.ReactNode,
  validationErrors: Dictionary<ValidationError> | undefined
) => {
  return React.Children.map(children, child => {
    // if child is a field.
    if (
      validationErrors === undefined ||
      Object.keys(validationErrors).length === 0
    ) {
      return child
    } else {
      return React.cloneElement(child as React.ReactElement<any>, {
        ValidationError:
          validationErrors[(child as React.ReactElement<any>).props.name],
      })
    }
  })
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
