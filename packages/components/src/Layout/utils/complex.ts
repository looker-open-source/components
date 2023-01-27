/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
export type ComplexLayoutProps = BorderProps &
  BoxShadowProps &
  ColorProps &
  SimpleLayoutProps &
  TypographyProps & {
    /**
     * Workaround for Styled Components merge with DOM `color` prop merge issue
     */
    color?: string
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
