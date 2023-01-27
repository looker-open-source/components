/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Property } from 'csstype'
import { css } from 'styled-components'

export interface UserSelectProps {
  /**
   * Property to set user-select CSS property
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
   * @example <Box userSelect="none"/>
   */
  userSelect?: Property.UserSelect
}

export const userSelect = (props: UserSelectProps) =>
  css`
    user-select: ${props.userSelect};
  `
