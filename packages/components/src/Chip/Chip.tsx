/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { useTranslation } from 'react-i18next'
import { maxWidth, MaxWidthProps, reset } from '@looker/design-tokens'
import React, { forwardRef, KeyboardEvent, MouseEvent, Ref } from 'react'
import styled, { css } from 'styled-components'
import { Close } from '@styled-icons/material/Close'
import {
  useClickable,
  GenericClickProps,
  focusVisibleCSSWrapper,
  FocusVisibleProps,
  useWrapEvent,
} from '../utils'
import { IconButton } from '../Button/IconButton'
import { Span, SpanProps } from '../Text'
import { TruncateCSSProps, truncateCSS } from '../Text/truncate'

export interface ChipProps
  extends MaxWidthProps,
    TruncateCSSProps,
    GenericClickProps<HTMLSpanElement> {
  /**
   * customize the tooltip on the closing icon
   * @default Delete
   */
  iconLabel?: string
  onDelete?: (
    e?: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>
  ) => void
  /**
   * I18n recommended: content that is user visible should be treated for i18n
   */
  prefix?: string
  readOnly?: boolean
}

const ChipStyle = styled.span<FocusVisibleProps & MaxWidthProps>`
  ${reset}
  ${maxWidth}

  align-items: center;
  background: ${({ theme }) => theme.colors.keySubtle};
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.keyInteractive};
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  height: 28px;
  min-width: 44px;
  padding: ${({ theme: { space } }) => `${space.xxsmall} ${space.xsmall}`};

  &:hover,
  &:active,
  &:focus,
  &[aria-selected='true'] {
    background: ${(props) => props.theme.colors.keyAccent};
  }

  &.focus,
  &:focus {
    outline: none;
  }

  ${focusVisibleCSSWrapper(
    ({ theme }) => css`
      box-shadow: 0 0 0.5px 1px ${theme.colors.keyFocus};
    `
  )}

  &:active {
    border-color: ${({ theme }) => theme.colors.key};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.neutralAccent};
    border-color: ${({ theme }) => theme.colors.ui2};
    color: ${({ theme }) => theme.colors.text1};

    &:hover {
      background: ${({ theme }) => theme.colors.neutralAccent};
    }
  }
`

const ChipLabel = styled(Span)<SpanProps & TruncateCSSProps>`
  ${truncateCSS}
`

const ChipJSX = forwardRef((props: ChipProps, ref: Ref<HTMLSpanElement>) => {
  const { t } = useTranslation('Chip')
  const iconLabelText = t('Delete')
  const {
    children,
    disabled,
    iconLabel = iconLabelText,
    onBlur,
    onClick,
    onDelete,
    onKeyUp,
    onKeyDown,
    readOnly = false,
    prefix,
    truncate = true,
    ...rest
  } = props

  const clickableProps = useClickable({ disabled, onBlur, onClick, onKeyUp })

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Backspace') {
      onDelete && onDelete(event)
    }
  }

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onDelete && onDelete(e)
    }
    e.stopPropagation()
  }

  return (
    <ChipStyle
      {...clickableProps}
      onKeyDown={useWrapEvent(handleKeyDown, onKeyDown)}
      ref={ref}
      {...rest}
    >
      <ChipLabel truncate={truncate}>
        {prefix && <ChipLabel fontWeight="normal">{prefix}: </ChipLabel>}
        {children}
      </ChipLabel>
      {readOnly ||
        disabled ||
        (onDelete && (
          <IconButton
            disabled={disabled}
            icon={<Close />}
            label={iconLabel}
            ml="xsmall"
            onClick={handleDelete}
            size="xxsmall"
          />
        ))}
    </ChipStyle>
  )
})

ChipJSX.displayName = 'ChipJSX'

export const Chip = styled(ChipJSX)``
