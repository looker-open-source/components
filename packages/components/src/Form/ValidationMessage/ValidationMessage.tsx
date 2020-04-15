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

import React, { FC } from 'react'
import { reset } from '@looker/design-tokens'
import styled from 'styled-components'

export type ValidationType = 'error'

export interface ValidationMessageProps {
  className?: string
  /**
   * The type of validation, therefore changing the message's text color. Accepts: error.
   */
  type?: ValidationType
  /**
   * The validation message to render.
   */
  message?: string
}

const ValidationMessageLayout: FC<ValidationMessageProps> = ({
  className,
  message,
}) => <div className={className}>{message}</div>

export const ValidationMessage = styled(ValidationMessageLayout)`
  ${reset}

  font-size: ${(props) => props.theme.fontSizes.xsmall};

  ${({ theme, type }) =>
    type === 'error' && `color: ${theme.colors.palette.red500};`}
`

ValidationMessage.displayName = 'ValidationMessage'
