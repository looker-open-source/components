/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Property } from 'csstype'
import { css } from 'styled-components'

export interface CursorProps {
  cursor?: Property.Cursor
}

export const cursor = (props: CursorProps) => css`
  cursor: ${props.cursor};
`
