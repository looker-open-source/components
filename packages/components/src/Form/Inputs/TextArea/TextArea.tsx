/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import React from 'react'
import styled, { css } from 'styled-components'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { ValidationType } from '../../ValidationMessage'
import { ErrorIcon } from '../ErrorIcon'
import {
  inputTextHover,
  inputTextFocus,
  inputTextDisabled,
  inputTextValidation,
  inputCSS,
} from '../InputText'
import type { SimpleLayoutProps } from '../../../Layout/utils/simple'
import { simpleLayoutCSS } from '../../../Layout/utils/simple'
import { pickInputProps } from '../InputProps'

type TextAreaResize = 'vertical' | 'none' | boolean

export interface TextAreaProps
  extends Omit<SimpleLayoutProps, 'size'>,
    CompatibleHTMLProps<HTMLTextAreaElement> {
  /**
   * Allows the end-user to resize vertical height of textarea
   * @default vertical
   */
  resize?: TextAreaResize
  validationType?: ValidationType
}

const TextAreaLayout = ({
  className,
  validationType,
  ...props
}: TextAreaProps) => {
  const textareaProps = pickInputProps(props)

  return (
    <div className={className}>
      <textarea
        aria-invalid={validationType === 'error' ? 'true' : undefined}
        {...textareaProps}
      />
      {validationType && <ErrorIcon />}
    </div>
  )
}

const textAreaResize = ({ resize }: TextAreaProps) => {
  if (resize === false) {
    resize = 'none'
  } else if (resize === true) {
    resize = 'vertical'
  }

  return css`
    resize: ${resize};
  `
}

export const TextArea = styled(TextAreaLayout).attrs<TextAreaProps>(
  ({ resize = 'vertical', minHeight = '6.25rem' }) => ({
    minHeight,
    resize,
  })
)<TextAreaProps>`
  height: fit-content;
  position: relative;
  width: 100%;

  ${ErrorIcon} {
    pointer-events: none;
    position: absolute;
    right: calc(${({ theme }) => theme.space.u3} + 1px);
    top: calc(${({ theme }) => theme.space.u3} / 2);
  }

  textarea {
    font-family: inherit;
    margin: 0; /* override browser default(s) */
    ${simpleLayoutCSS}
    ${inputCSS}
    padding: ${({ theme }) => `${theme.space.u2} ${theme.space.u3}`};
    padding-right: ${({ theme, validationType }) =>
      validationType === 'error' && theme.space.u10};
    ${textAreaResize}
    vertical-align: top; /* textarea is inline-block so this removes 4px generated below */
    width: 100%;

    ::placeholder {
      color: ${({ theme }) => theme.colors.text2};
    }

    &:hover {
      ${inputTextHover}
    }

    &:focus,
    :focus-within {
      ${inputTextFocus}
    }

    ${({ disabled }) => (disabled ? inputTextDisabled : '')}

    ${inputTextValidation}
  }
`

TextArea.displayName = 'TextArea'
