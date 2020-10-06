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
  alignSelf,
  flexBasis,
  flex,
  order,
  AlignSelfProps,
  FlexBasisProps,
  FlexProps,
  OrderProps,
} from 'styled-system'
import { complexLayoutCSS, ComplexLayoutProps } from '../utils/complex'

export interface FlexItemProps
  extends ComplexLayoutProps,
    AlignSelfProps,
    FlexBasisProps,
    FlexProps,
    OrderProps {}

export const FlexItem = styled.div<FlexItemProps>`
  ${complexLayoutCSS}
  ${alignSelf}
  ${flexBasis}
  ${flex}
  ${order}
  /*
   * A min-width must be set here to resolve a firefox bug where any children
   * with style of text-overflow: ellipsis; will otherwise not truncate the
   * text appropriately. */
  min-width: 0; /* IMPORANT!! Do not delete! */
`
