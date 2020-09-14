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
// import React, { forwardRef, Ref, useContext } from 'react'
import { WidthProps } from 'styled-system'
// import { LayoutContext } from './LayoutContext'
import { SemanticLayoutBase, semanticLayoutCSS } from './semanticStyledBase'

export interface AsideProps extends SemanticLayoutBase, WidthProps {}

export const Aside = styled.aside<AsideProps>`
  ${semanticLayoutCSS}

  flex: 0 0 ${({ width }) => width};
  max-width: ${({ width }) => width};
  min-width: ${({ width }) => width};
  width: 0;
`

Aside.defaultProps = { width: '12rem' }
