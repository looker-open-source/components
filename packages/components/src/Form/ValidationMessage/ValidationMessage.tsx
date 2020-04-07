/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import React, { forwardRef, Ref } from 'react'
import {
  CompatibleHTMLProps,
  CustomizableAttributes,
  layout,
  LayoutProps,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import styled from 'styled-components'

export type ValidationType = 'error'

export const CustomizableValidationMessageAttributes: CustomizableAttributes = {
  fontSize: 'xsmall',
}

export interface ValidationMessageProps
  extends LayoutProps,
    SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLDivElement> {
  /**
   * The type of validation, therefore changing the message's text color. Accepts: error.
   */
  type?: ValidationType
  /**
   * The validation message to render.
   */
  message?: string
}

const ValidationMessageBase = styled.div.attrs(
  (props: ValidationMessageProps) => ({
    fontSize:
      props.fontSize || CustomizableValidationMessageAttributes.fontSize,
  })
)<ValidationMessageProps>`
  ${reset}
  ${(props) =>
    props.type === 'error'
      ? `color: ${props.theme.colors.palette.red500};`
      : ''}
  ${layout}
  ${space}
  ${typography}
`

export const ValidationMessage = forwardRef(
  ({ message, ...props }: ValidationMessageProps, ref: Ref<HTMLDivElement>) => (
    <ValidationMessageBase mr="xsmall" mt="xsmall" {...props} ref={ref}>
      {message}
    </ValidationMessageBase>
  )
)

ValidationMessage.displayName = 'ValidationMessage'
