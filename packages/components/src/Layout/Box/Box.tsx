/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type {
  CompatibleHTMLProps,
  CursorProps,
  FlexboxProps,
  UserSelectProps,
} from '@looker/design-tokens'
import {
  cursor,
  flexbox,
  shouldForwardProp,
  userSelect,
} from '@looker/design-tokens'
import type { CommonLayoutProps } from '../utils/common'
import { commonLayoutCSS } from '../utils/common'

export type BoxProps = CompatibleHTMLProps<HTMLElement> &
  CommonLayoutProps &
  FlexboxProps &
  CursorProps &
  UserSelectProps

export const Box = styled.div.withConfig({ shouldForwardProp })<BoxProps>`
  ${commonLayoutCSS}
  ${userSelect}
   ${flexbox}
   ${cursor}
`
