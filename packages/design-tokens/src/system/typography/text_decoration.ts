/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'

export interface TextDecorationProps {
  textDecoration?: string
}

export const textDecoration = (props: TextDecorationProps) => css`
  text-decoration: ${props.textDecoration};
`
