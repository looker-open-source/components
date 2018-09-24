import tag from 'clean-tag'
import * as React from 'react'
import { FieldProps } from './Fields'
import { InputProps } from './Inputs/InputProps'
import { ValidationMessageProps } from './ValidationMessage'

export type ValidationMessages = Record<string, ValidationMessageProps>

export interface FormProps {
  validationMessages?: ValidationMessages
  onChange?: React.FormEventHandler<HTMLFormElement>
  onInput?: React.FormEventHandler<HTMLFormElement>
  onReset?: React.FormEventHandler<HTMLFormElement>
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  onInvalid?: React.FormEventHandler<HTMLFormElement>
}

interface FormContextValue {
  validationMessages?: ValidationMessages
}

export const FormContext = React.createContext<FormContextValue>({})

export const Form: React.SFC<FormProps> = ({ ...props }) => {
  const context = {
    validationMessages: props.validationMessages,
  }

  return (
    <FormContext.Provider value={context}>
      <tag.form {...props}>{props.children}</tag.form>
    </FormContext.Provider>
  )
}

export const withForm = <T extends {}>(
  Component: React.ComponentType<FieldProps & InputProps & T>
) => {
  return (
    props: FieldProps & InputProps & T & { children?: React.ReactChildren }
  ) => {
    const contextHelper = (context: FormContextValue) => {
      let validationMessage
      if (context.validationMessages && props.name) {
        validationMessage = context.validationMessages[props.name]
      } else if (props.validationMessage) {
        validationMessage = props.validationMessage
      }
      return (
        <Component {...props} validationMessage={validationMessage}>
          {props.children}
        </Component>
      )
    }
    return <FormContext.Consumer>{contextHelper}</FormContext.Consumer>
  }
}
