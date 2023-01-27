/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  CompatibleHTMLProps,
  BorderProps,
  TypographyProps,
} from '@looker/design-tokens'
import {
  reset,
  border,
  typography,
  shouldForwardProp,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface TableRowProps
  extends BorderProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLTableRowElement> {}

export const TableRow = styled.tr.withConfig({
  shouldForwardProp,
})<TableRowProps>`
  ${reset}
  ${border}
  ${typography}
`
