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

import styled, { css } from 'styled-components'
import { Flex, FlexProps } from '../../Layout'

export type FormControlDirections = 'left' | 'right' | 'top' | 'bottom'

export interface FormControlProps extends FlexProps {
  alignLabel?: FormControlDirections
}

const setFlexAlignment = ({ alignLabel }: FormControlProps) => {
  switch (alignLabel) {
    case 'left':
      return css`
        flex-direction: row;
        align-items: baseline;
      `
    case 'right':
      return css`
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: baseline;
      `
    case 'bottom':
      return css`
        flex-direction: column-reverse;
        justify-content: flex-end;
      `
    case 'top':
    default:
      return css`
        flex-direction: column;
      `
  }
}

export const FormControl = styled(Flex)<FormControlProps>`
  ${setFlexAlignment}
`
