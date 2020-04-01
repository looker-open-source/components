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

import styled from 'styled-components'
import {
  // InputTextProps,
  inputTextDisabled,
  inputTextValidation,
} from '../InputText'
import { TextArea } from '../TextArea'
import { inlineInputCSS } from '../../../InlineInputText'
// export interface InlineTextAreaProps extends TextAreaProps {}

export const InlineTextArea = styled(TextArea)`
  ${inlineInputCSS}
  /* textarea {
    background-color: transparent;
    border: none;
    border-bottom: dashed 1px;
    border-color: ${(props) => props.theme.colors.palette.charcoal300};
    height: 1.75rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.palette.charcoal100};
      border-bottom-color: ${(props) => props.theme.colors.palette.purple400};
    }
    &:focus,
    :focus-within {
      border-bottom: solid 1px;
      border-bottom-color: ${(props) => props.theme.colors.palette.purple400};
      box-shadow: none;
      outline: none;
    }
    ${inputTextValidation}
    ${(props) => (props.disabled ? inputTextDisabled : '')}
  } */
`

InlineTextArea.displayName = 'TextArea'
