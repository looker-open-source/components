/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  ColorProps,
  TypographyProps,
  SemanticBorderProps,
} from '@looker/design-tokens'
import { color, typography, borderHelper } from '@looker/design-tokens'
import { css } from 'styled-components'
import type { SimpleLayoutProps } from './simple'
import { simpleLayoutCSS } from './simple'

export type CommonLayoutProps = ColorProps &
  SimpleLayoutProps &
  SemanticBorderProps &
  TypographyProps & {
    /**
     * Workaround for Styled Components merge with DOM `color` prop merge issue
     */
    color?: string
  }

/**
 * Used as a common styled-system helper components. Builds on top of `simpleLayoutCSS`
 * to add border, color and typography properties.
 */
export const commonLayoutCSS = css`
  /**
   * Rules here should provide convenience styling for Box derived components.
   * Generally anything here could be overwritten by explicit values set via
   * Box's prop values. For example a function here that sets 'cursor: pointer'
   * would be overwritten by an explicit <Box2 cursor='copy'/>.
   */
  ${simpleLayoutCSS}

  ${borderHelper}
  ${color}
  ${typography}
`
