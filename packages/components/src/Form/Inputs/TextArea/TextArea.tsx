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

import pick from 'lodash/pick'
import React, { FC } from 'react'
import styled from 'styled-components'
import {
  BorderProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  CompatibleHTMLProps,
  layout,
  space,
  typography,
} from '@looker/design-tokens'
import { ValidationType } from '../../ValidationMessage'
import {
  inputTextHover,
  inputTextFocus,
  inputTextDisabled,
  inputTextValidation,
} from '../InputText'
import { Icon } from '../../../Icon'
import { inputPropKeys } from '../InputProps'

type TextAreaResize = 'vertical' | 'none' | boolean

export interface TextAreaProps
  extends BorderProps,
    Omit<LayoutProps, 'size'>,
    SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLTextAreaElement> {
  /**
   * @default: vertical
   */
  resize?: TextAreaResize
  validationType?: ValidationType
}

const TextAreaLayout: FC<TextAreaProps> = ({
  className,
  validationType,
  ...props
}) => {
  const textareaProps = pick(props, inputPropKeys)

  return (
    <div className={className}>
      <textarea
        aria-invalid={validationType === 'error' ? 'true' : undefined}
        {...textareaProps}
      />
      {validationType && <Icon name="Warning" color="palette.red500" />}
    </div>
  )
}

const TextAreaResize = (resize?: TextAreaResize) =>
  resize === false ? 'none' : resize === true ? 'vertical' : resize

export const TextArea = styled(TextAreaLayout)`
  height: fit-content;
  position: relative;
  width: 100%;

  ${Icon} {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  textarea {
    ${layout}
    ${space}
    ${typography}

    resize: ${(props) => TextAreaResize(props.resize)};
    border: solid 1px;
    width: 100%;

    border-color: ${(props) => props.theme.colors.palette.charcoal200};
    border-radius: ${(props) => props.theme.radii.medium};
    font-size: ${(props) => props.theme.fontSizes.small};
    min-height: 6.25rem;
    padding: ${({ theme }) => `${theme.space.xsmall} ${theme.space.small}`};
    padding-right: ${(props) => props.theme.space.xlarge};

    &:hover {
      ${inputTextHover}
    }
    &:focus,
    :focus-within {
      ${inputTextFocus}
    }

    ${(props) => (props.disabled ? inputTextDisabled : '')}

    ${inputTextValidation}
  }
`

TextArea.defaultProps = {
  height: '6.25rem',
  resize: 'vertical',
  width: '100%',
}

TextArea.displayName = 'TextArea'
