/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'
import type {
  LayoutProps,
  SpaceProps,
  PositionProps,
} from '@looker/design-tokens'
import { layout, space, position } from '@looker/design-tokens'

export interface SimpleLayoutProps
  extends LayoutProps,
    PositionProps,
    SpaceProps {}

/**
 * Used as a common styled-system helper simple layout
 * See also: `commonLayoutCSS` for more complex scenarios.
 */
export const simpleLayoutCSS = css`
  ${layout}
  ${space}
  ${position}
`
