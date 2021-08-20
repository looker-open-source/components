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

import type {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  TypographyProps,
} from '@looker/design-tokens'
import {
  border,
  boxShadow,
  color,
  reset,
  typography,
} from '@looker/design-tokens'
import { css } from 'styled-components'
import type { SimpleLayoutProps } from './simple'
import { simpleLayoutCSS } from './simple'

/**
 * @deprecated - use `CommonLayoutProps` instead.
 */
export type ComplexLayoutProps = SimpleLayoutProps &
  BorderProps &
  BoxShadowProps &
  ColorProps &
  TypographyProps & {
    /**
     * Workaround for Styled Components merge with DOM `color` prop merge issue
     */
    color?: any
  }

/**
 * Used as a common styled-system helper for `Box`& `Flex` & `FlexItem`
 *
 * Newer components leverage `commonLayoutCSS` which introduces an improved set of
 * properties for managing borders as well as excluding support for boxShadow.
 *
 * @TODO - Remove in 3.x series
 * @deprecated - use `commonLayoutCSS` instead.
 */
export const complexLayoutCSS = css`
  /**
   * Rules here should provide convenience styling for Box derived components.
   * Generally anything here could be overwritten by explicit values set via
   * Box's prop values. For example a function here that sets 'cursor: pointer'
   * would be overwritten by an explicit <Box cursor='copy'/>.
   */
  ${reset}
  ${simpleLayoutCSS}

  /**
   * Style Utilities that extend Box's props. Most of these come from
   * styled-system but some are Looker UI Components specific.
   *
   * These should be last to override rules with lower priority.
   */
  ${border}
  ${boxShadow}
  ${color}
  ${typography}
`
