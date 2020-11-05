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
import { densityTarget } from '../ActionListTable'

export interface ItemTargetProps {
  disabled?: boolean
  size?: string
}

/**
 * ItemTarget provides an explicitly sized target for click targets.
 */
export const ItemTarget = styled.div<ItemTargetProps>`
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: ${({ size }) => size || densityTarget};
  min-width: ${({ size }) => size || densityTarget};
  width: ${({ size }) => size || densityTarget};
`
