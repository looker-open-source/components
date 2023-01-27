/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type { CompatibleHTMLProps, FlexboxProps } from '@looker/design-tokens'
import {
  flexbox,
  paddingDefaultsHelper,
  shouldForwardProp,
} from '@looker/design-tokens'
import type { CommonLayoutProps } from '../Layout/utils/common'
import { commonLayoutCSS } from '../Layout/utils/common'

export interface CardContentProps
  extends CommonLayoutProps,
    FlexboxProps,
    CompatibleHTMLProps<HTMLElement> {}

export const CardContent = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<CardContentProps>(p => ({
    ...paddingDefaultsHelper(p, { p: 'u4' }),
  }))<CardContentProps>`
  ${commonLayoutCSS}
  ${flexbox}
`
