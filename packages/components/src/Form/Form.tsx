/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, {
  forwardRef,
  Ref,
  useContext,
  FormEventHandler,
  createContext,
} from 'react'
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
  onChange?: FormEventHandler<HTMLFormElement>
  onInput?: FormEventHandler<HTMLFormElement>
  onSubmit?: FormEventHandler<HTMLFormElement>
}

export interface FormContext {
  validationMessages?: ValidationMessages
}

export const FormContext = createContext<FormContext>({})

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
