/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  CompatibleHTMLProps,
  BorderProps,
  TypographyProps,
} from '@looker/design-tokens'
import { reset, border, typography } from '@looker/design-tokens'
import { css } from 'styled-components'

export interface TableSectionProps
  extends BorderProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLTableSectionElement> {}

export const tableSectionCSS = css`
  ${reset}
  ${border}
  ${typography}
`

export const tableSectionDefaults: TableSectionProps = { textAlign: 'left' }
