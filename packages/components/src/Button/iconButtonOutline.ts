/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'

export const iconButtonOutline = css`
  border: 1px solid ${({ theme: { colors } }) => colors.ui3};

  &:hover,
  &:focus,
  &.hover {
    border-color: ${({ theme: { colors } }) => colors.neutral};
  }

  &[aria-expanded='true'],
  &:active,
  &.active {
    border-color: ${({ theme: { colors } }) => colors.neutralInteractive};
  }

  &[disabled] {
    &:hover,
    &:active,
    &:focus {
      border-color: ${({ theme: { colors } }) => colors.ui3};
    }
  }
`
