/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { TableSectionProps } from '../tableSection'
import { tableSectionCSS } from '../tableSection'

export const TableFoot = styled.tbody
  .withConfig({ shouldForwardProp })
  .attrs<TableSectionProps>(({ textAlign = 'left' }) => ({
    textAlign,
  }))<TableSectionProps>`
  ${tableSectionCSS}
`
