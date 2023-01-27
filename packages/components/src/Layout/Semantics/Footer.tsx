/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { CommonLayoutProps } from '../utils/common'
import { commonLayoutCSS } from '../utils/common'
import { headerFooterCSS } from './Header'

export type FooterProps = CommonLayoutProps

export const Footer = styled.footer.withConfig({
  shouldForwardProp,
})<FooterProps>`
  ${commonLayoutCSS}
  ${headerFooterCSS}
  width: 100%;
`
