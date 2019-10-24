import React, { forwardRef, Ref, useContext } from 'react'
import styled from 'styled-components'
import omit from 'lodash/omit'
import {
  CompatibleHTMLProps,
  border,
  flexbox,
  layout,
  reset,
  space,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'looker-design-tokens'
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
  ${reset}
  ${border}
  ${flexbox}
  ${layout}
  ${space}
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

Form.displayName = 'Form'

export interface ChildProp {
  children?: JSX.Element
}

export interface UseFormContextProps {
  name?: string
  validationMessage?: ValidationMessageProps
}

export function useFormContext({
  name,
  validationMessage,
}: UseFormContextProps) {
  const context = useContext(FormContext)
  let vMessage
  if (context.validationMessages && name) {
    vMessage = context.validationMessages[name]
  } else if (validationMessage) {
    vMessage = validationMessage
  }
  return vMessage
}
