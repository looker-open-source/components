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
import omit from 'lodash/omit'
import styled from 'styled-components'
import { CompatibleHTMLProps, reset } from '@looker/design-tokens'
import {
  border,
  BorderProps,
  height,
  HeightProps,
  width,
  WidthProps,
} from 'styled-system'
import {
  CustomizableInputTextAttributes,
  inputTextDefaults,
  inputTextDisabled,
  inputTextHover,
} from '../../../Inputs/InputText'

export interface SwatchProps
  extends BorderProps,
    WidthProps,
    HeightProps,
    CompatibleHTMLProps<HTMLDivElement> {
  /**
   * The background color to display on the swatch.
   */
  color?: string
}

export const Swatch = styled.div<SwatchProps>`
  ${reset}
  ${width}
  ${height}
  ${border}

  &:hover {
    ${inputTextHover}
  }

  ${props => (props.disabled ? inputTextDisabled : '')}

  background-color: ${props => props.color};
  margin-top: auto;
  flex-shrink: 0;
`

Swatch.defaultProps = {
  ...inputTextDefaults,
  ...omit(CustomizableInputTextAttributes, 'fontSize'),
  color: 'white',
  width: CustomizableInputTextAttributes.height,
}
