/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import {
  border,
  boxShadow,
  color,
  position,
  layout,
  reset,
  space,
  typography,
  BorderProps,
  BoxShadowProps,
  ColorProps,
  PositionProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import { css } from 'styled-components'

export interface LayoutComponentProps
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {
  color?: any
}

export const layoutCSS = css`
  /**
   * Rules here should provide convenience styling for Box derived components.
   * Generally anything here could be overwritten by explicit values set via
   * Box's prop values. For example a function here that sets 'cursor: pointer'
   * would be overwritten by an explicit <Box cursor='copy'/>.
   */
  ${reset}

  /**
   * Style Utilities that extend Box's props. Most of these come from
   * styled-system but some are Looker UI Components specific.
   *
   * These should be last to override rules with lower priority.
   */
  ${border}
  ${boxShadow}
  ${color}
  ${layout}
  ${position}
  ${space}
  ${typography}
`
