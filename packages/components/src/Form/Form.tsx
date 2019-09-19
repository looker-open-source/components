import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../Box'
import { FieldProps } from './Fields'
import { InputProps } from './Inputs/InputProps'
import { ValidationMessageProps } from './ValidationMessage'

export type ValidationMessages = Record<string, ValidationMessageProps>

export interface FormProps extends Omit<BoxProps<HTMLFormElement>, 'as'> {
  /**
   * A record of all validation messages for the form, where the key is the name
   *  of the validated field and the value holds the information for the corresponding
   *  message and validation type.
   */
  validationMessages?: ValidationMessages
  onChange?: React.FormEventHandler<HTMLFormElement>
  onInput?: React.FormEventHandler<HTMLFormElement>
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}

export interface FormContext {
  validationMessages?: ValidationMessages
}

type ComponentType = FunctionComponent<FormProps>
type StyledComponentType = StyledComponent<ComponentType, FormProps>

export const FormContext = React.createContext<FormContext>({})

const InternalForm: React.FC<FormProps> = props => {
  const context = {
    validationMessages: props.validationMessages,
  }
  const { validationMessages, children, ...boxProps } = props
  return (
    <FormContext.Provider value={context}>
      <Box as="form" {...boxProps}>
        {children}
      </Box>
    </FormContext.Provider>
  )
}

const FormFactory = React.forwardRef<StyledComponentType, FormProps>(
  (props: FormProps, ref: Ref<StyledComponentType>) => (
    <InternalForm ref={ref} {...props} />
  )
)

/** @component */
export const Form = styled<ComponentType>(FormFactory)``

export interface ChildProp {
  children?: JSX.Element
}

export type FormComponentProps<T> = FieldProps & InputProps & T

export type ComponentWithForm<T> = React.FunctionComponent<
  FormComponentProps<T>
>

export const withForm = <T extends {}>(
  Component:
    | React.ComponentType<FormComponentProps<T>>
    | React.FunctionComponent<FormComponentProps<T>>
): ComponentWithForm<T> => {
  return (props: FormComponentProps<T & ChildProp>) => {
    const contextHelper = (context: FormContext) => {
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
