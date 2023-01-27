/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import styled from 'styled-components'
import type { TextBaseProps } from '../Text/TextBase'
import { TextBase } from '../Text/TextBase'

export interface CodeProps extends TextBaseProps {
  children?: ReactNode
}

export const Code = styled(TextBase).attrs<CodeProps>(
  ({ color = 'text5', fontFamily = 'code', fontSize, lineHeight }) => ({
    as: 'code',
    color,
    fontFamily,
    lineHeight: lineHeight || fontSize,
  })
)<CodeProps>``
