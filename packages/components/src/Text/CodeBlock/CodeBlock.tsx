/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { BorderProps } from '@looker/design-tokens'
import { border } from '@looker/design-tokens'
import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'
import type { TextBaseProps } from '../Text/TextBase'
import { TextBase } from '../Text/TextBase'

export interface CodeBlockProps extends TextBaseProps, BorderProps {
  className?: string
  children?: ReactNode
}

const CodeBlockLayout = ({ children, className, ...props }: CodeBlockProps) => (
  <TextBase className={className} as="pre" fontFamily="code" {...props}>
    <code>{children}</code>
  </TextBase>
)

export const CodeBlock = styled(CodeBlockLayout).attrs(
  ({ border = 'ui2', fontSize = 'small', p = 'medium' }) => ({
    border,
    fontSize,
    p,
  })
)`
  ${border}
  color: ${({ theme }) => theme.colors.text};
  overflow-y: auto;

  code {
    font-family: inherit;
  }
`
