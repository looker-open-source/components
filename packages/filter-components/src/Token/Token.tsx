/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import { ChipButton } from '@looker/components'
import React, { forwardRef } from 'react'
import styled from 'styled-components'

const MAX_TOKEN_WIDTH = '20rem'
export interface TokenProps {
  label: string
  subdued?: boolean
  isHoverTarget?: boolean
  isEmpty?: boolean
  maxWidth?: string
  onClick?: (event: React.SyntheticEvent) => void
  hasError?: boolean
  'aria-expanded'?: boolean
}

interface ChipTokenProps {
  showError?: boolean
}

/**
 * Builds the text portion of the FilterToken component
 * that displays the summary (label) description of a filter's value
 */
export const Token = forwardRef(
  (
    {
      label,
      subdued = true,
      maxWidth,
      isEmpty,
      isHoverTarget,
      hasError,
      onClick,
      ...props
    }: TokenProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    const showError = !props['aria-expanded'] && hasError
    let TokenComponent
    if (isHoverTarget) {
      TokenComponent = DropTargetToken
    } else if (isEmpty) {
      TokenComponent = EmptyToken
    } else {
      TokenComponent = TokenBase
    }
    return (
      <TokenComponent
        showError={showError}
        onClick={onClick}
        maxWidth={maxWidth}
        ref={ref}
        role="button"
        aria-selected={!subdued}
      >
        {label}
      </TokenComponent>
    )
  }
)

Token.displayName = 'Token'

export const TokenBase = styled(ChipButton)<
  ChipTokenProps & { maxWidth?: string }
>`
  ${({ theme, showError }) =>
    showError && `border: 1px solid ${theme.colors.criticalBorder};`}
  max-width: ${({ maxWidth }) => maxWidth || MAX_TOKEN_WIDTH};
`

const DropTargetToken = styled(TokenBase)`
  &:hover {
    border-color: ${({ theme }) => theme.colors.key};
  }
`

const EmptyToken = styled(TokenBase)`
  &[aria-selected='false'] {
    background: ${({ theme }) => theme.colors.ui1};
    border: 1px dashed ${({ theme }) => theme.colors.ui4};
    color: ${({ theme }) => theme.colors.text1};
  }
`

export const SubduedToken = styled(TokenBase)`
  font-weight: normal;

  &:hover {
    cursor: not-allowed;
  }
`
