/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { shouldForwardProp } from '@looker/design-tokens'
import styled, { css } from 'styled-components'
import type { CommonLayoutProps } from '../utils/common'
import { commonLayoutCSS } from '../utils/common'

export type HeaderProps = CommonLayoutProps

export const headerFooterCSS = css`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
`

export const Header = styled.header.withConfig({
  shouldForwardProp,
})<HeaderProps>`
  ${commonLayoutCSS}
  ${headerFooterCSS}
  width: 100%;
`
