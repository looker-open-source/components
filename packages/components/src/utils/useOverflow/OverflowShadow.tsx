/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled, { css } from 'styled-components'
import type { PaddingProps } from '@looker/design-tokens'
import { padding, reset } from '@looker/design-tokens'
import type { UseOverflowProps } from './useOverflow'

export type OverflowShadowProps = PaddingProps & UseOverflowProps

const OverflowShadowStyle = css`
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
  border-top: 1px solid ${({ theme }) => theme.colors.ui2};
  box-shadow: inset 0 -4px 4px -4px ${({ theme }) => theme.colors.ui2};
`

export const OverflowShadow = styled.div<OverflowShadowProps>`
  ${reset}
  ${({ hasOverflow }) => hasOverflow && OverflowShadowStyle}
  ${padding}
`
