/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Property } from 'csstype'
import { css } from 'styled-components'

export interface TextTransformProps {
  textTransform?: Property.TextTransform
}

export const textTransform = (props: TextTransformProps) => css`
  text-transform: ${props.textTransform};
`
