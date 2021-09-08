/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import { checkboxRadioHeight } from '../height'

export type FauxCheckboxProps = {
  isSelected?: boolean
}

export const FauxCheckbox = styled.div<FauxCheckboxProps>`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.key : 'currentColor'};
  border: solid 2px
    ${({ isSelected, theme: { colors } }) =>
      isSelected ? colors.key : colors.ui4};
  border-radius: ${({ theme }) => theme.radii.small};
  color: ${({ theme }) => theme.colors.keyText};
  height: ${checkboxRadioHeight};
  position: relative;
  width: ${checkboxRadioHeight};
  svg {
    position: absolute;
    right: 0;
    top: 0;
  }
`
