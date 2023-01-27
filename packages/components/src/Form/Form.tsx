/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref, FormEventHandler } from 'react'
import React, { forwardRef, useContext, createContext } from 'react'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { SpaceHelperProps } from '../Layout'
import { SpaceVertical } from '../Layout'
import type { ValidationMessageProps } from './ValidationMessage'

export type ValidationMessages = Record<string, ValidationMessageProps>

export interface FormProps
  extends SpaceHelperProps,
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

export interface FormContextProps {
  validationMessages?: ValidationMessages
}

export const FormContext = createContext<FormContextProps>({})

export const Form = forwardRef(
  (props: FormProps, ref: Ref<HTMLFormElement>) => {
    const { validationMessages, ...rest } = props
    return (
      <FormContext.Provider
        value={{
          validationMessages,
        }}
      >
        <SpaceVertical as="form" {...rest} ref={ref} />
      </FormContext.Provider>
    )
  }
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
