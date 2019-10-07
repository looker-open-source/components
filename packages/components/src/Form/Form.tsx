import React, {
  ComponentType,
  FunctionComponent,
  forwardRef,
  Ref,
  useContext,
} from 'react'
import styled from 'styled-components'
import omit from 'lodash/omit'
import {
  CompatibleHTMLProps,
  border,
  flexbox,
  layout,
  space,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from '@looker/design-tokens'
import { FieldProps } from './Fields'
import { InputProps } from './Inputs/InputProps'
import { ValidationMessageProps } from './ValidationMessage'

export type ValidationMessages = Record<string, ValidationMessageProps>

export interface FormProps
  extends BorderProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    CompatibleHTMLProps<HTMLFormElement> {
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

export const FormContext = React.createContext<FormContext>({})

const FormBase = styled.form`
  ${border};
  ${flexbox};
  ${layout};
  ${space};
`

export const Form = forwardRef(
  (props: FormProps, ref: Ref<HTMLFormElement>) => (
    <FormContext.Provider
      value={{
        validationMessages: props.validationMessages,
      }}
    >
      <FormBase {...omit(props, 'validationMessages')} ref={ref} />
    </FormContext.Provider>
  )
)

export interface ChildProp {
  children?: JSX.Element
}

export type FormComponentProps<T> = FieldProps & InputProps & T

export type ComponentWithForm<T> = FunctionComponent<FormComponentProps<T>>

export function useFormContext<T>(props: FormComponentProps<T>) {
  const context = useContext(FormContext)
  let validationMessage
  if (context.validationMessages && props.name) {
    validationMessage = context.validationMessages[props.name]
  } else if (props.validationMessage) {
    validationMessage = props.validationMessage
  }
  return validationMessage
}

export const withForm = <T extends {}>(
  Component:
    | ComponentType<FormComponentProps<T>>
    | FunctionComponent<FormComponentProps<T>>
): ComponentWithForm<T> => {
  return (props: FormComponentProps<T & ChildProp>) => {
    const validationMessage = useFormContext(props)
    return (
      <Component {...props} validationMessage={validationMessage}>
        {props.children}
      </Component>
    )
  }
}
