/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled, { css } from 'styled-components'
import { shouldForwardProp } from '@looker/design-tokens'
import type { FocusVisibleProps } from '../../utils'
import { focusVisibleCSSWrapper } from '../../utils'

const focusVisibleStyle = () => css`
  outline: 1px solid ${({ theme }) => theme.colors.key};
`

export interface FocusableCellProps extends FocusVisibleProps {
  as?: 'th'
}

export const FocusableCell = styled.td
  .withConfig({
    shouldForwardProp,
  })
  .attrs<FocusableCellProps>(() => ({
    tabIndex: -1,
  }))<FocusableCellProps>`
  outline: none;
  ${focusVisibleCSSWrapper(focusVisibleStyle)}
`
