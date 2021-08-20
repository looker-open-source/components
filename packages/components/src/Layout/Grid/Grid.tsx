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
import type { SpaceHelperProps } from '../Space'
import { defaultGap } from '../Space'
import { commonLayoutCSS } from '../utils/common'

export interface GridProps extends SpaceHelperProps {
  /**
   * Number of columns to display
   * @default 2
   */
  columns?: number
}

/**
 * Grid provides a simple implementation of the CSS Grid.
 *
 * By default `Grid` has two columns with a "medium" `gap` between grid cells and "100%" `width`
 */
export const Grid = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<GridProps>(({ width = '100%' }) => ({ width }))<GridProps>`
  ${commonLayoutCSS}

  display: grid;
  grid-gap: ${({ gap, theme }) => theme.space[gap || defaultGap]};
  grid-template-columns:
    repeat(${({ columns }) => columns || 2}, minmax(0, 1fr));
`
