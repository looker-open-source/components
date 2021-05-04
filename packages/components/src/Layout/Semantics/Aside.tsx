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

import { shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import { SemanticLayoutBase, semanticLayoutCSS } from './semanticStyledBase'
import { borderHelper, SemanticBorderProps } from './semanticBorderHelper'

export interface AsideProps extends SemanticLayoutBase, SemanticBorderProps {
  /**
   * To be used when desiring the Aside to be collapsible
   * @default false
   */
  collapse?: boolean
  /**
   * To be used within the context of <Page fixed> container.
   * When true, this removes the inner overflow-y scrolling
   * and allows content within a Layout group to scroll together.
   * @default false
   */
  scrollWithin?: boolean
  /**
   * Specify width of aside
   * @default '12rem'
   */
  width?: string
}

export const Aside = styled.aside
  .withConfig({ shouldForwardProp })
  .attrs<AsideProps>(({ width = '12rem' }) => ({
    width,
  }))<AsideProps>`
  ${semanticLayoutCSS}

  ${({ collapse }) => collapse && 'display: none;'}
  flex: 0 0 ${({ width }) => width};
  max-width: ${({ width }) => width};
  min-width: ${({ width }) => width};
  overflow: auto;
  width: 0;
  ${borderHelper}
  ${({ scrollWithin }) => scrollWithin && 'height: fit-content;'}
  `
