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
import { reset } from '@looker/design-tokens'

const dotSize = 6

export const FauxRadio = styled.div`
  ${reset}
  position: relative;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  border: solid 1px ${({ theme }) => `${theme.colors.palette.charcoal200}`};
  border-radius: 50%;
  border-color: currentColor;
  color: transparent;
  transition: background-color 25ms linear, border-color 25ms linear,
    box-shadow 25ms linear;

  &::after {
    content: '';
    position: absolute;
    background: #fff;
    width: ${dotSize}px;
    height: ${dotSize}px;
    border-radius: 50%;
    top: calc(50% - ${dotSize / 2}px);
    right: calc(50% - ${dotSize / 2}px);
  }
`
